import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface TTSButtonProps {
  text: string;
  className?: string;
  size?: "sm" | "default" | "lg";
}

export function TTSButton({ text, className, size = "sm" }: TTSButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { toast } = useToast();

  // Check if speech synthesis is supported
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (utteranceRef.current) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = async () => {
    if (!isSupported) {
      toast({
        title: "Text-to-Speech Not Supported",
        description: "Your browser doesn't support text-to-speech functionality.",
        variant: "destructive",
      });
      return;
    }

    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    try {
      setIsLoading(true);
      
      // Cancel any ongoing speech
      speechSynthesis.cancel();

      // Wait for voices to load
      let voices = speechSynthesis.getVoices();
      if (voices.length === 0) {
        await new Promise<void>((resolve) => {
          const timeout = setTimeout(() => resolve(), 2000); // 2 second timeout
          speechSynthesis.onvoiceschanged = () => {
            clearTimeout(timeout);
            resolve();
          };
        });
        voices = speechSynthesis.getVoices();
      }

      // Create utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;

      // Find a good voice (prefer English voices)
      const englishVoice = voices.find(voice => 
        voice.lang.startsWith('en') && !voice.name.includes('Google')
      );
      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      // Configure speech parameters
      utterance.rate = 0.9; // Slightly slower for better clarity
      utterance.pitch = 1.0;
      utterance.volume = 0.8;

      // Set up event handlers
      utterance.onstart = () => {
        setIsLoading(false);
        setIsPlaying(true);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsLoading(false);
      };

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        setIsPlaying(false);
        setIsLoading(false);
        toast({
          title: "Speech Error",
          description: "Unable to read the text. Please try again.",
          variant: "destructive",
        });
      };

      // Start speaking
      speechSynthesis.speak(utterance);

    } catch (error) {
      console.error('TTS Error:', error);
      setIsLoading(false);
      setIsPlaying(false);
      toast({
        title: "Speech Error",
        description: "Unable to read the text. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isSupported) {
    return null; // Don't render if not supported
  }

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={speak}
      disabled={isLoading}
      className={`h-8 w-8 p-0 hover:bg-primary/10 ${className}`}
      title={isPlaying ? "Stop reading" : "Read aloud"}
      aria-label={isPlaying ? "Stop reading" : "Read aloud"}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : isPlaying ? (
        <VolumeX className="w-4 h-4 text-primary" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </Button>
  );
}