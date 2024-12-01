"use client";
import { useState } from "react";
import NameInput from "./nameinput";
import EmailInput from "./emailinput";
import CompanyInput from "./companyinput";
import CustomTextArea from "./customtextarea";
import CustomSelect from "./customselect";
import styles from "./form.module.scss";
import { StatusFormError, StatusFormSuccess } from "./statusformmessage";
import LoadingSendEmail from "./loadingsendemail";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
    selectedOption: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
    selectedOption: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    if (!formData.name) errors.name = "El nombre es obligatorio";
    if (!formData.email) errors.email = "El correo electrónico es obligatorio";
    if (!formData.company) errors.company = "La empresa es obligatoria";
    if (!formData.description) errors.description = "El mensaje es obligatorio";
    if (!formData.selectedOption)
      errors.selectedOption = "Debes seleccionar un servicio";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          description: "",
          selectedOption: "",
        });
      } else {
        throw new Error(result.error || "Error desconocido");
      }
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormStatus(null);
    setFormErrors({
      name: "",
      email: "",
      company: "",
      description: "",
      selectedOption: "",
    });
  };

  const renderButtonContent = () => {
    if (formStatus === "success") {
      return <StatusFormSuccess onClick={handleReset} />;
    }
    if (formStatus === "error") {
      return <StatusFormError onClick={handleReset} />;
    }

    return (
      <>
        {isSubmitting ? (
          <LoadingSendEmail />
        ) : (
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            Enviar
          </button>
        )}
      </>
    );
  };

  return (
    <section className={styles.sectionForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.rowInput}>
          <NameInput
            name="name"
            placeholder="Tu nombre completo"
            required={true}
            label="Nombre y apellido*"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.name}
          />
          <EmailInput
            name="email"
            placeholder="micorreo@dominio.com"
            required={true}
            label="Correo electrónico*"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
          />
        </div>
        <div className={styles.rowInput}>
          <CompanyInput
            name="company"
            placeholder="Nombre de tu empresa o proyecto"
            required={true}
            label="Nombre de la empresa o proyecto*"
            value={formData.company}
            onChange={handleChange}
            error={formErrors.company}
          />
          <CustomSelect
            name="selectedOption"
            label="Seleccioná un tipo de servicio*"
            required={true}
            options={[
              "Diseño UX/UI",
              "Asesoramiento",
              "Experiencia de Usuario",
              "Interfaz de usuario",
              "Invitación a una entrevista",
            ]}
            value={formData.selectedOption}
            onChange={handleChange}
            error={formErrors.selectedOption}
          />
        </div>
        <CustomTextArea
          name="description"
          placeholder="¡Hola, Carlos! Me contacto para... (máx. 500 caracteres)"
          required={true}
          label="Dejá tu mensaje*"
          value={formData.description}
          onChange={handleChange}
          error={formErrors.description}
        />
        {formErrors.formError && (
          <p className={styles.error}>{formErrors.formError}</p>
        )}
        {/* Render del contenido dinámico del botón */}
        {renderButtonContent()}
      </form>
    </section>
  );
};

export default Form;
