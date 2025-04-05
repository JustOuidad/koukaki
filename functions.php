<?php
// Charger les styles parent et enfant
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ) );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

// Synchroniser les options du customizer entre le thème parent et enfant
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // Prévenir la mise à jour des mods du thème enfant
    }, 10, 2 );

    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

// Charger les scripts et styles additionnels
function add_enqueue_scripts() {
    // Swiper CSS et JS
    wp_enqueue_style( 'swiper', 'https://unpkg.com/swiper/swiper-bundle.min.css', array(), '1.0' );
    wp_enqueue_script( 'swiper-coverflow', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), '1.0', true );

    // Simple Parallax JS
    wp_enqueue_script( 'simple-parallax', 'https://cdnjs.cloudflare.com/ajax/libs/simple-parallax-js/5.6.2/simpleParallax.min.js', array(), '5.6.2', true );

    // Script JS personnalisé
    wp_enqueue_script( 'child-script', get_stylesheet_directory_uri() . '/js/script.js', array( 'jquery' ), '1.1', true );
}
add_action( 'wp_enqueue_scripts', 'add_enqueue_scripts' );
