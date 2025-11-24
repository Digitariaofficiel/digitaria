document.addEventListener("DOMContentLoaded", function () {


  const serviceModal = document.getElementById("serviceModal");
  const serviceModalTitle = document.getElementById("serviceModalTitle");
  const serviceModalContent = document.getElementById("serviceModalContent");
  const serviceCards = document.querySelectorAll(".service-card");

  const serviceDetails = {
    creation: {
      title: "Création de Site Web",
      content: `
<div class="space-y-6">
<p class="text-gray-600">Notre service de création de site web comprend :</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium text-gray-900 mb-2">Design Personnalisé</h4>
<ul class="space-y-2 text-gray-600">
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Maquettes sur mesure</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Interface intuitive</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Responsive design</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Dark mode</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Animations fluides</li>


</ul>
</div>
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium text-gray-900 mb-2">Fonctionnalités</h4>
<ul class="space-y-2 text-gray-600">
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Formulaires de contact</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Intégration réseaux sociaux</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Google Analytics</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Fonctionnalités à la demande</li>
</ul>
</div>
</div>
<div class="mt-6">
<h4 class="font-medium text-gray-900 mb-2">Notre processus</h4>
<ol class="space-y-4">
<li class="flex items-start">
<span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
<div>
<h5 class="font-medium text-gray-900">Analyse des besoins</h5>
<p class="text-gray-600">Étude approfondie de votre projet et de vos objectifs</p>
</div>
</li>
<li class="flex items-start">
<span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
<div>
<h5 class="font-medium text-gray-900">Design et maquettage</h5>
<p class="text-gray-600">Création de maquettes adaptées à votre identité</p>
</div>
</li>
<li class="flex items-start">
<span class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
<div>
<h5 class="font-medium text-gray-900">Développement</h5>
<p class="text-gray-600">Intégration et programmation des fonctionnalités</p>
</div>
</li>
</ol>
</div>
<div class="mt-8 p-4 bg-primary/5 rounded">
<p class="text-primary font-medium">À partir de 499 CHF</p>
<p class="text-sm text-gray-600 mt-1">Prix final selon les fonctionnalités demandées</p>
</div>
<div class="mt-4 text-center">
<a href="#contact" class="text-primary hover:text-primary/80 transition font-medium" onclick="document.querySelector('#serviceModal').classList.remove('active'); document.body.style.overflow = '';">
Contactez-nous pour plus d'informations →
</a>
</div>
</div>`,
    },
    redesign: {
      title: "Redesign de Site Web",
      content: `
<div class="space-y-6">
<p class="text-gray-600">Notre service de redesign comprend :</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium text-gray-900 mb-2">Analyse</h4>
<ul class="space-y-2 text-gray-600">
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Audit du site existant</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Analyse des performances</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Étude de la demande</li>
</ul>
</div>
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium text-gray-900 mb-2">Améliorations</h4>
<ul class="space-y-2 text-gray-600">
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Design sur mesure</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Optimisation UX (user experience)</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Performance améliorée</li>
</ul>
</div>
</div>
<div class="mt-8 p-4 bg-primary/5 rounded">
<p class="text-primary font-medium">À partir de 199 CHF</p>
<p class="text-sm text-gray-600 mt-1">Prix final selon l'ampleur du projet</p>
</div>
<div class="mt-4 text-center">
<a href="#contact" class="text-primary hover:text-primary/80 transition font-medium" onclick="document.querySelector('#serviceModal').classList.remove('active'); document.body.style.overflow = '';">
Contactez-nous pour plus d'informations →
</a>
</div>
</div>`,
    },
    seo: {
      title: "Optimisation SEO",
      content: `
<div class="space-y-6">
<p class="text-gray-600">Notre service d'optimisation SEO comprend :</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium text-gray-900 mb-2">Audit SEO</h4>
<ul class="space-y-2 text-gray-600">
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Analyse des mots-clés</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Audit technique</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Analyse de la concurrence</li>
</ul>
</div>
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium text-gray-900 mb-2">Optimisations</h4>
<ul class="space-y-2 text-gray-600">
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Optimisation on-page</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Création de contenu</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Netlinking</li>
</ul>
</div>
</div>
<div class="mt-8 p-4 bg-primary/5 rounded">
<p class="text-primary font-medium">À partir de 99 CHF</p>
<p class="text-sm text-gray-600 mt-1">Prix final selon les besoins</p>
</div>
<div class="mt-4 text-center">
<a href="#contact" class="text-primary hover:text-primary/80 transition font-medium" onclick="document.querySelector('#serviceModal').classList.remove('active'); document.body.style.overflow = '';">
Contactez-nous pour plus d'informations →
</a>
</div>
</div>`,
    },
    maintenance: {
      title: "Maintenance",
      content: `
<div class="space-y-6">
<p class="text-gray-600">Notre service de maintenance comprend :</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium text-gray-900 mb-2">Maintenance Technique</h4>
<ul class="space-y-2 text-gray-600">
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Mises à jour de sécurité</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Sauvegardes régulières</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Monitoring 24/7</li>
</ul>
</div>
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium text-gray-900 mb-2">Support</h4>
<ul class="space-y-2 text-gray-600">
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Support prioritaire</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Modifications mineures</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-primary mr-2"></i>Rapport mensuel</li>
</ul>
</div>
</div>
<div class="mt-8 p-4 bg-primary/5 rounded">
<p class="text-primary font-medium">À partir de 20 CHF/mois</p>
<p class="text-sm text-gray-600 mt-1">Prix final selon les services inclus</p>
</div>
<div class="mt-4 text-center">
<a href="#contact" class="text-primary hover:text-primary/80 transition font-medium" onclick="document.querySelector('#serviceModal').classList.remove('active'); document.body.style.overflow = '';">
Contactez-nous pour plus d'informations →
</a>
</div>
</div>`,
    },
  };

  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      const serviceType = card.getAttribute("data-service");
      const serviceDetail = serviceDetails[serviceType];
      serviceModalTitle.textContent = serviceDetail.title;
      serviceModalContent.innerHTML = serviceDetail.content;
      serviceModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Nouveaux témoignages à ajouter dans le HTML
  const additionalTestimonials = [
    {
      name: "Client Satisfait",
      role: "Entreprise Tech",
      content: "Une expertise technique remarquable. Notre plateforme e-commerce fonctionne parfaitement et les ventes ont augmenté de 70% depuis le lancement.",
      stars: 5
    },
    {
      name: "Client Content",
      role: "Cabinet d'architecte",
      content: "Le design est exactement ce que nous cherchions. Notre portfolio n'a jamais été aussi bien mis en valeur.",
      stars: 5
    },
    {
      name: "Client Ravi",
      role: "Association locale",
      content: "Un travail professionnel à un prix abordable. Notre présence en ligne s'est considérablement améliorée.",
      stars: 5
    },
    {
      name: "Client Enchanté",
      role: "Boutique artisanale",
      content: "Communication claire et résultats exceptionnels. Notre site attire maintenant beaucoup plus de clients.",
      stars: 4.5
    },
    {
      name: "Client Conquis",
      role: "Restaurant local",
      content: "Service client exceptionnel et résultats au-delà de nos attentes. Je recommande vivement!",
      stars: 5
    }
  ];

  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialNav = document.createElement('div');
  testimonialNav.className = 'testimonial-nav';

  const prevButton = document.createElement('button');
  prevButton.className = 'testimonial-button';
  prevButton.innerHTML = '<i class="ri-arrow-left-s-line text-xl"></i>';

  const nextButton = document.createElement('button');
  nextButton.className = 'testimonial-button';
  nextButton.innerHTML = '<i class="ri-arrow-right-s-line text-xl"></i>';

  testimonialNav.appendChild(prevButton);
  testimonialNav.appendChild(nextButton);

  document.querySelector('.testimonial-slider').appendChild(testimonialNav);

  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial-card');
  const maxGroups = Math.ceil(testimonials.length / 3);
  let autoSlideInterval;

  // Fonction pour démarrer le défilement automatique
  function startAutoSlide() {
    // Réinitialisation de l'intervalle existant
    if (autoSlideInterval) clearInterval(autoSlideInterval);

    autoSlideInterval = setInterval(() => {
      // Passage au groupe suivant
      currentTestimonial = (currentTestimonial + 3) % (maxGroups * 3);
      updateTestimonials();
    }, 5000);
  }

  // Fonction pour arrêter le défilement automatique
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Gestion des boutons de navigation
  nextButton.addEventListener('click', () => {
    stopAutoSlide();
    currentTestimonial = (currentTestimonial + 3) % (maxGroups * 3);
    updateTestimonials();
    startAutoSlide(); // Redémarrage du défilement après l'action
  });

  prevButton.addEventListener('click', () => {
    stopAutoSlide();
    currentTestimonial = (currentTestimonial - 3 + maxGroups * 3) % (maxGroups * 3);
    updateTestimonials();
    startAutoSlide(); // Redémarrage du défilement après l'action
  });

  // Mise à jour de l'affichage des témoignages
  function updateTestimonials() {
    const groupIndex = Math.floor(currentTestimonial / 3);

    // Mise à jour de l'état actif des cartes
    testimonials.forEach((card, index) => {
      const cardGroup = Math.floor(index / 3);
      card.classList.toggle('active', cardGroup === groupIndex);
    });

    // Animation de défilement
    testimonialTrack.style.transform = `translateX(-${groupIndex * 100}%)`;
    updateIndicators();

    // Console log pour le débogage
    console.log(`Groupe actuel: ${groupIndex + 1}/${maxGroups}`);
  }

  // Démarrage initial
  startAutoSlide();

  // Arrêter le défilement automatique uniquement quand la souris est sur le slider (pas sur les boutons)
  document.querySelector('.testimonial-track').addEventListener('mouseenter', stopAutoSlide);
  document.querySelector('.testimonial-track').addEventListener('mouseleave', startAutoSlide);

  // Création des indicateurs
  const indicatorsContainer = document.querySelector('.testimonial-indicators');
  const numGroups = Math.ceil(testimonials.length / 3);

  for (let i = 0; i < numGroups; i++) {
    const indicator = document.createElement('div');
    indicator.className = 'testimonial-indicator';
    indicator.addEventListener('click', () => {
      currentTestimonial = i * 3;
      updateTestimonials();
    });
    indicatorsContainer.appendChild(indicator);
  }

  function updateIndicators() {
    const indicators = document.querySelectorAll('.testimonial-indicator');
    const currentGroup = Math.floor(currentTestimonial / 3);
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentGroup);
    });
  }

  // Initialize
  updateTestimonials();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
  // Project modal functionality
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const projectCards = document.querySelectorAll(".project-card");
  const modalClose = document.querySelector(".modal-close");

  // Project details object
  const projectDetails = {
    1: {
      title: "CUTSBYIMG",
      description: "Site web professionnel pour un salon de coiffure moderne.",
      url: "https://cutsbyimg.ch", // Ajouter l'URL du site
      content: `
        <div class="space-y-4">
          <p class="text-gray-600">Site web réalisé pour CUTSBYIMG, un salon de coiffure proposant des services de qualité dans un cadre moderne et accueillant.</p>
          <div class="bg-gray-50 p-4 rounded">
            <h4 class="font-medium text-gray-900 mb-2">Fonctionnalités réalisées :</h4>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Design responsive et moderne
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Présentation des services
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Système de réservation en ligne
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Informations de contact et horaires
              </li>
            </ul>
          </div>
          <div class="bg-primary/5 p-4 rounded">
            <p class="text-primary font-medium">Type de projet :</p>
            <p class="text-gray-600">Site vitrine pour salon de coiffure</p>
          </div>
          <div class="flex justify-center mt-6">
            <a href="https://cutsbyimg.ch" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-primary/90 hover:shadow-lg active:bg-primary/80 transition-all duration-200 transform hover:-translate-y-0.5">
              <i class="ri-external-link-line"></i>
              Visiter le site
            </a>
          </div>
        </div>
      `
    },
    2: {
      title: "Nutrisanté",
      description: "Site web professionnel pour un cabinet de nutrition et santé.",
      url: "https://lmnutrisante.ch", // Ajouter l'URL du site
      content: `
        <div class="space-y-4">
          <p class="text-gray-600">Site web réalisé pour Nutrisanté, un cabinet de nutrition proposant des services de qualité dans un cadre moderne et accueillant.</p>
          <div class="bg-gray-50 p-4 rounded">
            <h4 class="font-medium text-gray-900 mb-2">Fonctionnalités réalisées :</h4>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Design responsive et moderne
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Présentation des prestations et tarifs
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Affichage des horaires d'ouverture
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Informations de contact et localisation
              </li>
            </ul>
          </div>
          <div class="bg-primary/5 p-4 rounded">
            <p class="text-primary font-medium">Type de projet :</p>
            <p class="text-gray-600">Site vitrine pour cabinet de nutrition</p>
          </div>
          <div class="flex justify-center mt-6">
            <a href="https://lmnutrisante.ch" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-primary/90 hover:shadow-lg active:bg-primary/80 transition-all duration-200 transform hover:-translate-y-0.5">
              <i class="ri-external-link-line"></i>
              Visiter le site
            </a>
          </div>
        </div>
      `
    },
    3: {
      title: "Parking Ruchonnet",
      description: "Site web professionnel pour un parking privé et vente de motos d'occasion.",
      url: "https://parking-ruchonnet-gare.ch", // Ajouter l'URL du site
      content: `
        <div class="space-y-4">
          <p class="text-gray-600">Site web réalisé pour Parking Ruchonnet, un parking privé proposant des services de qualité dans un cadre professionnel et accueillant.</p>
          <div class="bg-gray-50 p-4 rounded">
            <h4 class="font-medium text-gray-900 mb-2">Fonctionnalités réalisées :</h4>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Design responsive et moderne
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Présentation des prestations et tarifs
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Affichage des horaires d'ouverture
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Présentation du matériel d'occasion disponible
              </li>
              <li class="flex items-center">
                <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                Informations de contact et localisation
              </li>
            </ul>
          </div>
          <div class="bg-primary/5 p-4 rounded">
            <p class="text-primary font-medium">Type de projet :</p>
            <p class="text-gray-600">Site vitrine pour parking privé</p>
          </div>
          <div class="flex justify-center mt-6">
            <a href="https://parking-ruchonnet-gare.ch" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-primary/90 hover:shadow-lg active:bg-primary/80 transition-all duration-200 transform hover:-translate-y-0.5">
              <i class="ri-external-link-line"></i>
              Visiter le site
            </a>
          </div>
        </div>
      `
    }
  };

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      const project = projectDetails[projectId];

      if (project) {
        modalTitle.textContent = project.title;
        modalDescription.innerHTML = project.content;
      } else {
        modalTitle.textContent = `Projet Innovant #${projectId}`;
        modalDescription.innerHTML = `
          <div class="space-y-4">
            <p class="text-gray-600">Ce projet est actuellement en cours de développement. Notre équipe travaille dur pour créer quelque chose d'exceptionnel.</p>
            <div class="bg-gray-50 p-4 rounded">
              <h4 class="font-medium text-gray-900 mb-2">Ce que nous préparons :</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                  Design moderne et innovant
                </li>
                <li class="flex items-center">
                  <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                  Expérience utilisateur optimisée
                </li>
                <li class="flex items-center">
                  <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                  Fonctionnalités sur mesure
                </li>
                <li class="flex items-center">
                  <i class="ri-checkbox-circle-line text-primary mr-2"></i>
                  Performance et accessibilité
                </li>
              </ul>
            </div>
            <p class="text-sm text-gray-500">Date de lancement prévue : Prochainement</p>
            <div class="flex justify-center mt-6">
              <div class="inline-flex items-center gap-2 bg-gray-300 text-gray-500 px-6 py-3 rounded-button font-medium cursor-not-allowed">
                <i class="ri-time-line"></i>
                Bientôt disponible
              </div>
            </div>
          </div>
        `;
      }

      modal.classList.add("active");
      document.body.style.overflow = "hidden";

      // Fix images in modal after content is loaded
      setTimeout(fixImageCropping, 100);
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
  // Add active state to navigation items based on scroll position
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");
  const handleScroll = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        current = "#" + section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("text-primary");
      if (link.getAttribute("href") === current) {
        link.classList.add("text-primary");
      }
    });
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  const animateOnScrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajout d'un petit délai pour rendre l'animation plus fluide
          setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, 100);
          animateOnScrollObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Augmenter le seuil pour déclencher l'animation plus tôt
      rootMargin: "50px", // Déclencher l'animation avant que l'élément soit complètement visible
    }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((element) => {
    animateOnScrollObserver.observe(element);
  });

  // Gestion du formulaire de newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterInput = document.getElementById('newsletterEmail');
  const newsletterMessage = document.getElementById('newsletterMessage');

  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = newsletterInput.value;

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showNewsletterMessage('Veuillez entrer une adresse email valide', 'error');
      return;
    }

    // Simuler l'envoi (à remplacer par votre véritable API)
    showNewsletterMessage('Inscription réussie ! Merci de votre intérêt.', 'success');
    newsletterInput.value = '';
  });

  function showNewsletterMessage(message, type) {
    newsletterMessage.textContent = message;
    newsletterMessage.className = `mt-2 text-sm ${type === 'error' ? 'text-red-500' : 'text-green-500'}`;
    setTimeout(() => {
      newsletterMessage.textContent = '';
    }, 5000);
  }

  // Ajout des gestionnaires d'événements pour fermer la modal des services
  const serviceModalClose = serviceModal.querySelector(".modal-close");

  serviceModalClose.addEventListener("click", () => {
    serviceModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  serviceModal.addEventListener("click", (e) => {
    if (e.target === serviceModal) {
      serviceModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
  // Add this at the beginning of your existing DOMContentLoaded callback
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = mobileMenu.getElementsByTagName('a');

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
    // Petit délai pour permettre à la transition de s'exécuter
    setTimeout(() => {
      mobileMenu.classList.toggle('show');
    }, 10);
  });

  // Fermer le menu quand on clique sur un lien
  Array.from(mobileMenuLinks).forEach(link => {
    link.addEventListener('click', () => {
      menuButton.classList.remove('active');
      mobileMenu.classList.remove('show');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 500); // Attendre la fin de l'animation
    });
  });

  // Fermer le menu quand on clique en dehors
  document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
      menuButton.classList.remove('active');
      mobileMenu.classList.remove('show');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 500);
    }
  });
  // FAQ Accordion functionality
  document.querySelectorAll('.faq-item button').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const answer = button.nextElementSibling;
      const icon = button.querySelector('i');

      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.querySelector('.faq-answer').style.maxHeight = null;
          item.querySelector('i').style.transform = 'rotate(0deg)';
          item.classList.remove('active');
        }
      });

      // Toggle current FAQ item
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
        faqItem.classList.remove('active');
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(45deg)';
        faqItem.classList.add('active');
      }
    });
  });

  // Validation et envoi du formulaire de contact
  document.getElementById('contactForm').addEventListener('submit', validateAndSubmit);

  // Initialisation d'EmailJS au démarrage
  emailjs.init(config.emailjs.publicKey);

  function validateAndSubmit(event) {
    event.preventDefault();

    // Récupération des valeurs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!name) {
      showNotification('Veuillez entrer votre nom', 'error');
      return false;
    }

    if (!email || !isValidEmail(email)) {
      showNotification('Veuillez entrer une adresse email valide', 'error');
      return false;
    }

    if (!service) {
      showNotification('Veuillez sélectionner un service', 'error');
      return false;
    }

    // Ajout d'un indicateur de chargement
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Envoi en cours...';
    submitButton.disabled = true;

    const templateParams = {
      from_name: name,
      to_email: "contactdigitaria@gmail.com",
      message: message || "Pas de message",
      phone_number: phone,
      selected_service: service,
      from_email: email,
      'g-recaptcha-response': '',
      host: window.location.hostname
    };

    emailjs.send(config.emailjs.serviceId, config.emailjs.templateId, templateParams)
      .then(function (response) {
        console.log('Succès:', response);
        showNotification('Message envoyé avec succès !', 'success');
        document.getElementById('contactForm').reset();
      })
      .catch(function (error) {
        console.error('Erreur EmailJS:', error);
        if (error.text) {
          showNotification(error.text, 'error');
        } else {
          showNotification('Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.', 'error');
        }
      })
      .finally(function () {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      });

    return false;
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Ajouter gestionnaire pour les liens de service dans le footer
  document.querySelectorAll('footer a[data-service]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceType = link.getAttribute('data-service');
      const serviceDetail = serviceDetails[serviceType];
      serviceModalTitle.textContent = serviceDetail.title;
      serviceModalContent.innerHTML = serviceDetail.content;
      serviceModal.classList.add("active");
      document.body.style.overflow = "hidden";

      // Scroll jusqu'à la section services
      const servicesSection = document.querySelector('#services');
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: "smooth"
      });
    });
  });

  // Ajouter cette fonction pour les notifications
  function showNotification(message, type) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'rounded-lg',
        title: 'font-medium text-sm',
      },
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    Toast.fire({
      icon: type,
      title: message,
      background: type === 'success' ? '#3b82f6' : '#ef4444',
      color: '#ffffff'
    });
  }

  // Gestion des liens de politique
  document.querySelectorAll('.policy-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const policy = link.getAttribute('data-policy');
      const footerLinks = document.querySelector('#footer').querySelectorAll('a');
      footerLinks.forEach(footerLink => {
        if (policy === 'privacy' && footerLink.textContent.includes('Politique')) {
          footerLink.click();
        } else if (policy === 'legal' && footerLink.textContent.includes('Mentions')) {
          footerLink.click();
        }
      });
    });
  });

  // Force scroll to top on page load
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // Alternative method for browsers that might block onbeforeunload
  document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0);
  });

  // Fix image cropping issues
  function fixImageCropping() {
    // Fix project card images
    const projectImages = document.querySelectorAll('.project-card img, .portfolio-image img');
    projectImages.forEach(img => {
      img.style.objectFit = 'cover';
      img.style.objectPosition = 'center';
      img.style.width = '100%';
      img.style.height = '100%';
    });

    // Fix modal images
    const modalImages = document.querySelectorAll('#projectModal img, #serviceModal img');
    modalImages.forEach(img => {
      img.style.objectFit = 'contain';
      img.style.objectPosition = 'center';
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    });

    // Fix hero section images
    const heroImages = document.querySelectorAll('.hero img, .hero-image img');
    heroImages.forEach(img => {
      img.style.objectFit = 'cover';
      img.style.objectPosition = 'center';
      img.style.width = '100%';
      img.style.height = '100%';
    });
  }

  // Call the fix function
  fixImageCropping();

  // Re-apply fixes when images load
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', fixImageCropping);
  });
});