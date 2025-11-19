import TitleHeader from "../components/TitleHeader";
import Navbar from "../components/NavBar";
import Footer from "../sections/Footer";

const NosServices = () => {
  return (
    <>
      <Navbar />
      <section id="services" className="section-padding padding-x-lg">
        {/* H1 - Titre principal */}
        <div className="w-full mb-16">
          <h1 className="text-white font-semibold md:text-5xl text-3xl text-center mb-6">
            Services d'intégration d'agents IA pour entreprises – IGDKEY
          </h1>
          <p className="text-white-50 md:text-xl text-lg text-center max-w-4xl mx-auto">
            Chez IGDKEY, nous croyons que l'intelligence artificielle n'est plus un luxe réservé aux grandes entreprises. 
            Nos services d'intégration d'agents IA sont conçus pour aider les petites entreprises à tirer parti de la 
            puissance de l'automatisation, de la personnalisation et des données pour se développer plus rapidement et plus efficacement.
          </p>
          <p className="text-white-50 md:text-xl text-lg text-center max-w-4xl mx-auto mt-4">
            Grâce à notre expertise, nous transformons vos processus internes et vos interactions clients à l'aide de 
            solutions d'IA sur mesure qui s'intègrent parfaitement à vos outils existants.
          </p>
        </div>

        {/* H2 - Pourquoi choisir IGDKEY */}
        <div className="w-full mb-20">
          <TitleHeader 
            title="Pourquoi choisir IGDKEY pour l'intégration d'agents IA ?"
            sub="💡 Notre valeur ajoutée"
          />
          <div className="grid-2-cols mt-12">
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">Une expertise centrée sur les PME</h3>
              <p className="text-white-50 text-lg">
                IGDKEY comprend les défis spécifiques auxquels font face les petites entreprises : ressources limitées, 
                besoin d'efficacité, et volonté d'innover sans complexité technique. Nous développons des agents IA simples 
                à utiliser, puissants, et rentables.
              </p>
            </div>
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">Des solutions IA sur mesure et évolutives</h3>
              <p className="text-white-50 text-lg">
                Chaque entreprise est unique. Nos agents IA s'adaptent à vos systèmes (CRM, ERP, outils de support client, etc.) 
                et évoluent avec votre croissance. Notre objectif : une intégration fluide, rapide et sans interruption de vos activités.
              </p>
            </div>
          </div>
        </div>

        {/* H2 - Nos principaux services */}
        <div className="w-full mb-20">
          <TitleHeader 
            title="Nos principaux services d'agents IA"
            sub="🚀 Nos offres"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {/* Service 1 - Prend 2 colonnes sur desktop */}
            <div className="card-border rounded-xl p-8 flex flex-col gap-4 md:col-span-2">
              <h3 className="text-white text-2xl font-semibold">
                1. Développement et intégration d'agents IA
              </h3>
              <p className="text-white-50 text-lg">
                Nos développeurs conçoivent et intègrent des agents IA intelligents capables de gérer vos tâches répétitives, 
                d'automatiser vos processus internes, et de soutenir vos équipes dans la prise de décision.
              </p>
              <p className="text-white-50 text-lg">
                Les agents peuvent être intégrés à vos plateformes existantes : chat en ligne, gestion client, planification, et plus encore.
              </p>
              <div className="mt-4 space-y-3">
                <h4 className="text-white text-xl font-semibold">Automatisation des processus métiers</h4>
                <p className="text-white-50">
                  Nos solutions permettent de réduire les tâches manuelles et d'augmenter la productivité, tout en minimisant les erreurs humaines.
                </p>
                <h4 className="text-white text-xl font-semibold mt-4">Personnalisation selon vos outils existants</h4>
                <p className="text-white-50">
                  Nous connectons vos agents IA à vos systèmes actuels (CRM, ERP, CMS, etc.) pour une intégration harmonieuse sans perturber votre workflow.
                </p>
              </div>
            </div>

            {/* Service 2 - Prend 1 colonne sur desktop */}
            <div className="card-border rounded-xl p-8 flex flex-col gap-4 md:col-span-1">
              <h3 className="text-white text-2xl font-semibold">
                2. Formation et accompagnement à l'usage de l'IA
              </h3>
              <p className="text-white-50 text-lg">
                Nous accompagnons vos équipes dans la compréhension et la maîtrise de leurs nouveaux outils d'IA. 
                IGDKEY propose des sessions de formation, des tutoriels et un support continu.
              </p>
            </div>

            {/* Service 3 - Prend 1 colonne sur desktop */}
            <div className="card-border rounded-xl p-8 flex flex-col gap-4 md:col-span-1">
              <h3 className="text-white text-2xl font-semibold">
                3. Maintenance et optimisation continue des agents IA
              </h3>
              <p className="text-white-50 text-lg">
                L'IA évolue constamment. IGDKEY assure la maintenance, les mises à jour et l'optimisation de vos agents 
                afin de garantir des performances durables.
              </p>
            </div>
          </div>
        </div>

        {/* H2 - Les bénéfices */}
        <div className="w-full mb-20">
          <TitleHeader 
            title="Les bénéfices de l'intégration d'agents IA avec IGDKEY"
            sub="✨ Vos avantages"
          />
          <div className="grid-3-cols mt-12">
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">Gain de temps et réduction des coûts</h3>
              <p className="text-white-50 text-lg">
                L'automatisation permet de libérer du temps pour vos équipes, réduire les coûts opérationnels et concentrer 
                vos efforts sur des tâches à forte valeur ajoutée.
              </p>
            </div>
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">Expérience client améliorée</h3>
              <p className="text-white-50 text-lg">
                Des agents IA réactifs et personnalisés garantissent une meilleure expérience utilisateur, une assistance 24/7 
                et une satisfaction accrue.
              </p>
            </div>
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">Décisions plus intelligentes grâce aux données</h3>
              <p className="text-white-50 text-lg">
                Nos agents collectent et analysent vos données en temps réel, vous aidant à prendre des décisions plus stratégiques 
                et basées sur des faits concrets.
              </p>
            </div>
          </div>
        </div>

        {/* H2 - Processus d'intégration */}
        <div className="w-full mb-20">
          <TitleHeader 
            title="Notre processus d'intégration IA"
            sub="📋 Comment ça marche"
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid-2-cols gap-8">
              <div className="card-border rounded-xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">1️⃣</span>
                  <h3 className="text-white text-2xl font-semibold">Audit et analyse de vos besoins</h3>
                </div>
                <p className="text-white-50 text-lg">
                  Nous évaluons vos objectifs et vos défis internes.
                </p>
              </div>
              <div className="card-border rounded-xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">2️⃣</span>
                  <h3 className="text-white text-2xl font-semibold">Conception et développement personnalisé</h3>
                </div>
                <p className="text-white-50 text-lg">
                  Nous créons un agent IA sur mesure adapté à votre activité.
                </p>
              </div>
              <div className="card-border rounded-xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">3️⃣</span>
                  <h3 className="text-white text-2xl font-semibold">Intégration et tests</h3>
                </div>
                <p className="text-white-50 text-lg">
                  Nous assurons une mise en œuvre fluide et testée dans vos environnements réels.
                </p>
              </div>
              <div className="card-border rounded-xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">4️⃣</span>
                  <h3 className="text-white text-2xl font-semibold">Formation et support continu</h3>
                </div>
                <p className="text-white-50 text-lg">
                  Nous vous accompagnons à chaque étape, même après le déploiement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* H2 - FAQ */}
        <div className="w-full mb-20">
          <TitleHeader 
            title="Foire aux questions (FAQ)"
            sub="❓ Questions fréquentes"
          />
          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">1. Qu'est-ce qu'un agent IA ?</h3>
              <p className="text-white-50 text-lg">
                Un agent IA est un programme intelligent capable d'automatiser des tâches, d'interagir avec les clients et 
                d'analyser les données pour prendre des décisions.
              </p>
            </div>
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">2. IGDKEY peut-il adapter un agent IA à mon système actuel ?</h3>
              <p className="text-white-50 text-lg">
                Oui ! Nos intégrations sont 100 % personnalisées selon vos outils et besoins.
              </p>
            </div>
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">3. L'IA est-elle adaptée aux petites entreprises ?</h3>
              <p className="text-white-50 text-lg">
                Absolument. C'est même un avantage compétitif majeur pour les PME souhaitant gagner du temps et améliorer leur service.
              </p>
            </div>
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">4. Quels types de tâches un agent IA peut-il gérer ?</h3>
              <p className="text-white-50 text-lg">
                Support client, gestion des ventes, planification, analyse de données, et bien plus encore.
              </p>
            </div>
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">5. IGDKEY propose-t-il un support après l'installation ?</h3>
              <p className="text-white-50 text-lg">
                Oui, nous offrons un accompagnement complet, incluant maintenance et mise à jour continue.
              </p>
            </div>
            <div className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">6. Combien de temps faut-il pour déployer un agent IA ?</h3>
              <p className="text-white-50 text-lg">
                Cela dépend du projet, mais en moyenne entre 2 et 6 semaines selon la complexité.
              </p>
            </div>
          </div>
        </div>

        {/* H2 - Conclusion avec CTA */}
        <div className="w-full mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white font-semibold md:text-4xl text-2xl mb-6">
              Passez à l'intelligence automatisée avec IGDKEY
            </h2>
            <p className="text-white-50 md:text-xl text-lg mb-8">
              Ne laissez pas la technologie vous dépasser. IGDKEY vous aide à franchir le pas vers l'avenir en intégrant 
              des agents IA puissants, fiables et évolutifs. Ensemble, rendons votre entreprise plus intelligente, plus rapide et plus performante.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact"
                className="md:w-80 w-full h-12 cta-wrapper group"
              >
                <div className="cta-button">
                  <p className="button-text">Contactez-nous pour en savoir plus</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NosServices;

