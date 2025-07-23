export function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About SenseAbled
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              SenseAbled is a revolutionary therapeutic platform that combines cutting-edge technology 
              with evidence-based rehabilitation techniques to empower individuals with sensory and physical impairments.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To democratize access to high-quality therapeutic interventions by creating an inclusive, 
              accessible, and engaging platform that adapts to each user's unique needs and abilities.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Approach</h2>
            <p className="text-muted-foreground mb-6">
              We believe that therapy should be both effective and enjoyable. Our gamified approach 
              transforms traditional rehabilitation exercises into engaging, interactive experiences 
              that motivate users to achieve their therapeutic goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}