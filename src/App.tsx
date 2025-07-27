import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Upload, Send, Building2, Users, Star, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez traiter le formulaire
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/WhatsApp Image 2025-07-12 à 05.44.28_4012c403.jpg" 
                alt="GD Structures Logo" 
                className="h-10 w-10 object-contain rounded-lg"
              />
              <h1 className="text-2xl font-bold text-gray-900">GD Structures</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['accueil', 'services', 'projets', 'equipe', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-blue-700 border-b-2 border-blue-700' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  {section === 'equipe' ? 'Équipe' : section === 'services' ? 'Services' : section}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['accueil', 'services', 'projets', 'equipe', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-700 capitalize w-full text-left"
                >
                  {section === 'equipe' ? 'Équipe' : section === 'services' ? 'Services' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Construisons l'avenir
                  <span className="text-blue-700 block">ensemble</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  "Bâtir avec excellence, innover avec passion"
                </p>
              </div>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>GD Structures</strong> est une entreprise spécialisée dans la construction et l'ingénierie structurelle. 
                  Avec plus de 13 ans d'expérience combinée, nos ingénieurs diplômés du CHEBAP 2009 mettent leur expertise 
                  au service de vos projets les plus ambitieux.
                </p>
                <p>
                  De la conception à la réalisation, nous accompagnons nos clients dans la concrétisation de leurs rêves 
                  architecturaux avec un savoir-faire technique reconnu et une approche personnalisée.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Nos Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  Nous Contacter
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">13+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">100+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">2</div>
                  <div className="text-sm text-gray-600">Ingénieurs experts</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Construction moderne"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span className="font-semibold text-gray-900">Qualité Certifiée</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GD Structures vous accompagne dans tous vos projets de construction avec une expertise technique reconnue.
            </p>
          </div>

          <div className="space-y-20">
            {/* Conception */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Building2 className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Conception</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  GD STRUCTURES propose de collaborer avec les architectes et les maîtres d'ouvrage publics et privés :
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>À la définition du projet architectural dans le respect des aspects techniques, environnementaux, budgétaires et du calendrier</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>À la réalisation des études de structures pour l'ensemble des phases (APS, AVP, PRO DCE...)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fourniture des pièces écrites : CCTP, quantitatif des matériaux, DPGF...</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mission d'assistance à la passation des marchés de travaux (ACT)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mission de VISA, direction d'exécution des marchés de travaux (DET)</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Conception architecturale"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Exécution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Exécution de travaux"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Users className="h-8 w-8 text-indigo-700" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Exécution</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  GD STRUCTURES accompagne les entreprises et particuliers :
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dans l'optimisation, la recherche de variantes, le prédimensionnement des ouvrages en phase de soumission</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>À la réalisation des plans de coffrage et d'armatures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>À la réalisation des notes de calculs et note d'hypothèses générales</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Participation aux réunions de coordination</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Diagnostic */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Award className="h-8 w-8 text-green-700" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Diagnostic</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dans le cadre de votre projet de réaménagement ou de transformation de votre bâtiment, 
                  GD STRUCTURES vous propose :
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Réalisation de diagnostic structurel pour les ouvrages existants pour tout type de matériaux</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Réalisation de sondages destructifs ou non destructifs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Plans d'exécution des renforts structurels pour dépose de murs porteurs, ouvertures sur planchers...</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Étude de faisabilité et d'exécution de surélévation et d'extension des bâtiments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Assistances aux architectes et aux maîtres d'ouvrage (particuliers, sociétés...) dans la rédaction des pièces techniques : rapports de diagnostic, CCTP, DPGF</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Diagnostic structural"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets qui témoignent de notre expertise et de notre engagement envers l'excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Maisons finies */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Villa moderne terminée"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Villa Moderne</h3>
                  <p className="text-sm">Projet terminé - 2024</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Terminé
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Résidence familiale"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Résidence Familiale</h3>
                  <p className="text-sm">Projet terminé - 2023</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Terminé
              </div>
            </div>

            {/* Maisons en construction */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction en cours"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Complexe Résidentiel</h3>
                  <p className="text-sm">En construction - 2024</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                En cours
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Immeuble moderne"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Immeuble de Bureaux</h3>
                  <p className="text-sm">Projet terminé - 2023</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Terminé
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chantier en cours"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Centre Commercial</h3>
                  <p className="text-sm">En construction - 2024</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                En cours
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/1029602/pexels-photo-1029602.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maison individuelle"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Maison Contemporaine</h3>
                  <p className="text-sm">Projet terminé - 2024</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Terminé
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section id="equipe" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les fondateurs de GD Structures, des ingénieurs passionnés avec une expertise reconnue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mamadou GUEYE */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-80 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Mamadou GUEYE</h3>
                  <p className="text-blue-100 font-semibold">Ingénieur Structure - CHEBAP 2009</p>
                  <p className="text-blue-200">13 ans d'expérience</p>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <a href="tel:0672326890" className="hover:text-blue-600 transition-colors">
                    06 72 32 68 90
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:m.gueye@gdstructures.fr" className="hover:text-blue-600 transition-colors">
                    m.gueye@gdstructures.fr
                  </a>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert en conception structurelle et gestion de projets complexes. Spécialisé dans l'innovation 
                  architecturale et les constructions durables.
                </p>
              </div>
            </div>

            {/* Tamsir DIALLO */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-80 bg-gradient-to-br from-indigo-600 to-indigo-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tamsir DIALLO</h3>
                  <p className="text-indigo-100 font-semibold">Ingénieur Structure - CHEBAP 2009</p>
                  <p className="text-indigo-200">13 ans d'expérience</p>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 text-indigo-600" />
                  <a href="tel:0623509463" className="hover:text-indigo-600 transition-colors">
                    06 23 50 94 63
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5 text-indigo-600" />
                  <a href="mailto:t.diallo@gdstructures.fr" className="hover:text-indigo-600 transition-colors">
                    t.diallo@gdstructures.fr
                  </a>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Spécialiste en calculs de structures et contrôle qualité. Expert dans l'optimisation 
                  des coûts et le respect des délais de construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous avez un projet ? N'hésitez pas à nous contacter pour discuter de vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="sujet"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="construction-neuve">Construction neuve</option>
                    <option value="renovation">Rénovation</option>
                    <option value="expertise">Expertise technique</option>
                    <option value="devis">Demande de devis</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="fichiers" className="block text-sm font-medium text-gray-700 mb-2">
                    Joindre des fichiers
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors duration-200">
                    <input
                      type="file"
                      id="fichiers"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <label htmlFor="fichiers" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        Cliquez pour sélectionner des fichiers ou glissez-déposez
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, DOCX, JPG, PNG (max 10MB)
                      </p>
                    </label>
                  </div>
                  {selectedFiles && (
                    <div className="mt-2 text-sm text-gray-600">
                      {Array.from(selectedFiles).map((file, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span>📎</span>
                          <span>{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>

            {/* Informations de contact et carte */}
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600">
                        123 Avenue de la Construction<br />
                        75001 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Téléphones</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>Mamadou GUEYE: 06 72 32 68 90</p>
                        <p>Tamsir DIALLO: 06 23 50 94 63</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Emails</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>m.gueye@gdstructures.fr</p>
                        <p>t.diallo@gdstructures.fr</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte de localisation */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gradient-to-br from-blue-600 to-blue-800 relative flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                    <h4 className="text-xl font-bold mb-2">Notre Localisation</h4>
                    <p className="text-blue-100 mb-2">123 Avenue de la Construction</p>
                    <p className="text-blue-100 mb-4">75001 Paris, France</p>
                    <button 
                      onClick={() => window.open('https://maps.google.com/?q=Paris,France', '_blank')}
                      className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                    >
                      Voir sur Google Maps
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 opacity-20">
                    <Building2 className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/WhatsApp Image 2025-07-12 à 05.44.28_4012c403.jpg" 
                  alt="GD Structures Logo" 
                  className="h-8 w-8 object-contain rounded-lg"
                />
                <h3 className="text-xl font-bold">GD Structures</h3>
              </div>
              <p className="text-gray-400 mb-4">
                "Bâtir avec excellence, innover avec passion"
              </p>
              <p className="text-gray-400 text-sm">
                Votre partenaire de confiance pour tous vos projets de construction et d'ingénierie structurelle.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Construction neuve</li>
                <li>Rénovation</li>
                <li>Expertise technique</li>
                <li>Études structurelles</li>
                <li>Maîtrise d'œuvre</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Avenue de la Construction</p>
                <p>75001 Paris, France</p>
                <p>contact@gdstructures.fr</p>
                <div className="flex space-x-4 mt-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GD Structures. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;