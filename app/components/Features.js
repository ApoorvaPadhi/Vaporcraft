export default function Features() {
    return (
      <section id="features" className="bg-background text-primary p-8">
        <h2 className="font-header text-3xl mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-secondary text-background rounded-lg">
            Feature 1
          </div>
          <div className="p-4 bg-secondary text-background rounded-lg">
            Feature 2
          </div>
          <div className="p-4 bg-secondary text-background rounded-lg">
            Feature 3
          </div>
        </div>
      </section>
    );
  }
  