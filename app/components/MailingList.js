export default function MailingList() {
    return (
      <section id="mailing-list" className="bg-secondary text-background p-8">
        <h2 className="font-header text-3xl mb-4">Join Our Mailing List</h2>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 flex-1 rounded"
          />
          <button className="bg-primary text-background p-2 rounded">Submit</button>
        </form>
      </section>
    );
  }
  