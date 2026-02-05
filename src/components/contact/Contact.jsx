import { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!form.email.trim()) newErrors.email = "El correo es obligatorio";
    else if (!form.email.includes("@")) newErrors.email = "Correo inválido";
    if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      const response = await fetch(
        `https://portfolio-api-jfzg.onrender.com/api/Mail/contactMe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "SECRET-API-KEY": import.meta.env.VITE_API_KEY,
          },
          body: JSON.stringify(form),
        },
      );

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      toast.success("Mensaje enviado correctamente");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Hubo un problema al enviar el mensaje");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>{t("contact")}</h2>
      </div>

      <div className="contact-card">
        <p className="contact-text">{t("contactText")}</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <input
              type="text"
              name="name"
              placeholder={t("formName")}
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="field-group">
            <input
              type="email"
              name="email"
              placeholder={t("formMail")}
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="field-group">
            <textarea
              name="message"
              placeholder={t("formMessage")}
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="send-button" disabled={loading}>
            {loading ? t("loading") : t("formButton")}
          </button>
        </form>
      </div>
    </section>
  );
}
