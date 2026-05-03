import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Particles } from '../components/Particles';
const Contact = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formdata);
      await emailjs.send("service_0eykb39", "template_ta5emxc", {
        from_name: formdata.name,
        to_name: "Abhijeet",
        from_email: formdata.email,
        to_email: "abhijeet7ruia@gmail.com",
        message: formdata.message,
      },"-B8XC7N1EcKuw2Yjl");
      setIsLoading(false);
      alert("success");
      setFormdata({ name: "", email: "", message: "" });
    } catch (error) {
      setIsLoading(false);
      console.log("error");
      alert("failed");

    }


  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
      className="absolute inset-0 -z-50"
      quantity={100}
      ease={80}
      color={"#ffffff"}
      refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10 " >
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Weather your're looking to build a new website , improve
            your existing platform , or bring a unique project to life , I'm here to help.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="md-5">
            <label htmlFor="name" classname="feild-label">
              Full Name
            </label>
            <input id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              autoComplete="name"
              value={formdata.name}
              onChange={handleChange}
              required></input>
          </div>
          <div className="md-5">
            <label htmlFor="email" classname="feild-label">
              Email
            </label>
            <input id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              autoComplete="email"
              value={formdata.email}
              onChange={handleChange}
              required></input>
          </div>
          <div className="md-5">
            <label htmlFor="message" classname="feild-label">
              Message
            </label>
            <textarea id="message"
              name="message"
              type="text"
              className="field-input field-input-focus"
              placeholder="Share your thoughts...."
              autoComplete="message"
              value={formdata.message}
              onChange={handleChange}
              required></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md
          cursor-pointer bg-radial from-lavender to-royal hover-animation">
            {!isLoading ? "Send" : "sending..."}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact