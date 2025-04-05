<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner fadeInverse">
            <video class="banner__video" poster="<?php echo get_theme_file_uri() . '/assets/images/banner.png'; ?>" autoplay muted loop>
                <source src=<?php echo get_theme_file_uri() . '/assets/video/studio-koukaki.mp4'; ?> type="video/mp4">
            </video>
            <img class="logo" src="<?php echo get_theme_file_uri() . '/assets/images/logo.png'; ?>" alt="logo Fleurs d'oranger & chats errants">
        </section>
        <section id="story" class="story">
            <h2>L'histoire</h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
            <article id="characters">
                <div class="main-character">
                    <h3>Les personnages</h3>
                    <?php get_template_part('template-parts/characters-swiper'); ?>
                </div>
            </article>
            <article id="place">
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                    <img class="big-cloud" src="<?php echo get_theme_file_uri() . '/assets/images/big-cloud.png'; ?>" alt="grandNuage">
                    <img class="little-cloud" src="<?php echo get_theme_file_uri() . '/assets/images/little-cloud.png'; ?>" alt="petitNuage">
                </div>
            </article>
        </section>


        <section id="studio">
            <h2>Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>


        <!-- Ajout de la section oscar avec la fonction intégrée de WP -->
        <?php get_template_part('template-parts/oscars-section');?>

    </main><!-- #main -->

<?php
get_footer();
