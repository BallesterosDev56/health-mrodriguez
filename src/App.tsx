import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, Brain, Salad, Timer, ChevronDown, Mail, Scale, Heart, Users } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  fullName: string;
  country: string;
  city: string;
  phone: string;
  email: string;
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    country: '',
    city: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Datos comunes para ambos correos
    const templateParams = {
      from_name: formData.fullName,
      to_name: formData.fullName,
      email: formData.email,
      reply_to: formData.email,
      user_country: formData.country,
      user_city: formData.city,
      user_phone: formData.phone
    };
    
    try {
      // Enviar correo de notificación a Mariana
      await emailjs.send(
        'service_doh9953',  // Tu Service ID
        'template_on2n2yq',  // ID de la plantilla para Mariana (reemplaza con el ID real)
        templateParams,
        '2Za3Tw-f8rG6AGc3m' // Tu Public Key
      );
      
      // Enviar correo de confirmación al cliente
      await emailjs.send(
        'service_doh9953',  // Tu Service ID
        'template_r0kj0ah',  // ID de la plantilla para el cliente (reemplaza con el ID real)
        templateParams,
        '2Za3Tw-f8rG6AGc3m' // Tu Public Key
      );
      
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        country: '',
        city: '',
        phone: '',
        email: ''
      });
    } catch (error) {
      console.error('Error al enviar el email:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Recupera tu Salud y
              <span className="block text-emerald-600">Transforma tu Vida</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Programa especializado para personas entre 30 y 60 años que buscan mejorar su salud, reducir el sobrepeso y aumentar su productividad con el apoyo de expertos certificados.
            </p>
            <div className="mt-8 flex justify-center gap-x-4">
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                EMPEZAR AHORA <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Historia de Éxito: Carlos</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="rounded-xl bg-white p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img
                  alt="Carlos"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-900">Carlos Rodríguez</p>
                  <p className="text-emerald-600">Perdió 25kg en 6 meses</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">
                "Después de años luchando con mi peso y estrés laboral, encontré este programa. Los expertos me ayudaron a crear hábitos saludables que cambiaron mi vida. Ahora tengo más energía, mejor concentración y, lo más importante, recuperé mi salud."
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-8 w-full inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-4 text-lg font-semibold text-white shadow-sm hover:bg-emerald-500"
              >
                INSCRÍBETE AHORA <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Beneficios del Programa</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-8 text-center">
              <Scale className="mx-auto h-12 w-12 text-emerald-600" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Control de Peso</h3>
              <p className="mt-4 text-gray-600">Plan nutricional personalizado y seguimiento continuo para alcanzar tu peso ideal.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-8 text-center">
              <Heart className="mx-auto h-12 w-12 text-emerald-600" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Salud Integral</h3>
              <p className="mt-4 text-gray-600">Mejora tu salud física y mental con el apoyo de nuestros especialistas.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-8 text-center">
              <Users className="mx-auto h-12 w-12 text-emerald-600" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Apoyo Continuo</h3>
              <p className="mt-4 text-gray-600">Acceso directo a nutricionistas y expertos en salud para guiarte en tu proceso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comienza Tu Transformación</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">País</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Número de celular</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Message Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">¡Registro Exitoso!</h3>
            <p className="text-gray-600 mb-6">
              Hemos enviado un correo electrónico con información importante. Revisa tu bandeja de entrada para conectar con nuestros asesores.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setShowForm(false);
              }}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Mariana Rodríguez. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;