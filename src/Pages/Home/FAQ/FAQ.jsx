const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-sm mx-auto py-20 font-DM">
        <h2 className="text-6xl text-sky-900">FAQ</h2>
        <div className="collapse collapse-arrow bg-sky-100 my-5">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is the role of a real estate agent?
          </div>
          <div className="collapse-content">
            <p>
              A real estate agent helps in finding suitable properties,
              negotiating deals, and handling paperwork.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-sky-100 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is a property survey, and do I need one?
          </div>
          <div className="collapse-content">
            <p>
              A property survey determines the property boundaries and any
              encroachments. While not always mandatory, it's wise to get one to
              avoid legal disputes later.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-sky-100 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I make an offer on a property?
          </div>
          <div className="collapse-content">
            <p>
              Make an offer through your real estate agent or directly to the
              seller. Negotiate terms like the purchase price, closing date, and
              any contingencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
