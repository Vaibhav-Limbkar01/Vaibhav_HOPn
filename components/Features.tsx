const features = [
  {
    title: "Wallet-Based Login",
    description: "No usernames or passwords. Your wallet is your identity.",
  },
  {
    title: "Instant Transfers",
    description: "Send and receive digital funds instantly.",
  },
  {
    title: "Transaction History",
    description: "Track all wallet activity transparently.",
  },
];

export default function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-6 px-8 pb-24">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 border rounded-2xl hover:shadow-sm transition"
        >
          <h3 className="text-lg font-semibold mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}
