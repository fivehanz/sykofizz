<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

if ( ! function_exists( 'mahan_setup' ) ) {
	add_action( 'after_setup_theme', 'mahan_setup' );
	// Sets up theme defaults and registers support for various WordPress features.
	function mahan_setup() {
		
		add_editor_style( 'style.css' );
		
	}
}

// Overwrite parent theme background defaults and registers support for WordPress features.
add_action( 'after_setup_theme', 'martanda_background_setup' );
function martanda_background_setup() {
	add_theme_support( "custom-background",
		array(
			'default-color' 		 => '111111',
			'default-image'          => '',
			'default-repeat'         => 'repeat',
			'default-position-x'     => 'left',
			'default-position-y'     => 'top',
			'default-size'           => 'auto',
			'default-attachment'     => '',
			'wp-head-callback'       => '_custom_background_cb',
			'admin-head-callback'    => '',
			'admin-preview-callback' => ''
		)
	);
}

// Replace default fonts from parent theme
function martanda_get_font_face_styles() {
	return "
	@font-face{
		font-family: 'Teko';
		font-weight: 100;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
		src: url('" . get_stylesheet_directory_uri() . "/fonts/Teko-Light.woff2') format('woff2');
	}
	@font-face{
		font-family: 'Teko';
		font-weight: 200;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
		src: url('" . get_stylesheet_directory_uri() . "/fonts/Teko-Light.woff2') format('woff2');
	}
	@font-face{
		font-family: 'Teko';
		font-weight: 300;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
		src: url('" . get_stylesheet_directory_uri() . "/fonts/Teko-Light.woff2') format('woff2');
	}
	@font-face{
		font-family: 'Teko';
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
		src: url('" . get_stylesheet_directory_uri() . "/fonts/Teko-Regular.woff2') format('woff2');
	}
	@font-face{
		font-family: 'Teko';
		font-weight: 500;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
		src: url('" . get_stylesheet_directory_uri() . "/fonts/Teko-Medium.woff2') format('woff2');
	}
	@font-face{
		font-family: 'Teko';
		font-weight: 600;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
		src: url('" . get_stylesheet_directory_uri() . "/fonts/Teko-SemiBold.woff2') format('woff2');
	}
	@font-face{
		font-family: 'Teko';
		font-weight: 700;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
		src: url('" . get_stylesheet_directory_uri() . "/fonts/Teko-Bold.woff2') format('woff2');
	}
	@font-face{
		font-family: 'Teko';
		font-weight: 800;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
		src: url('" . get_stylesheet_directory_uri() . "/fonts/Teko-Bold.woff2') format('woff2');
	}
	@font-face{
		font-family: 'Teko';
		font-weight: 900;
		font-style: normal;
		font-stretch: normal;
		font-display: swap;
		src: url('" . get_stylesheet_directory_uri() . "/fonts/Teko-Bold.woff2') format('woff2');
	}
	";
}

function martanda_font_family_css() {
	// Get our settings
	$martanda_settings = wp_parse_args(
		get_option( 'martanda_settings', array() ),
		martanda_get_defaults()
	);

	// Initiate our class
	$css = new martanda_css;
	
	$og_defaults = martanda_get_defaults( false );
	
	$bodyclass = 'body';
	if ( is_admin() ) {
		$bodyclass = '.editor-styles-wrapper';
	}
	
	$bodyfont = $martanda_settings[ 'font_body' ];
	if ( $bodyfont == 'inherit' ) { $bodyfont = 'Teko'; }
	
	$font_site_title = $martanda_settings[ 'font_site_title' ];
	if ( $font_site_title == 'inherit' ) { $font_site_title = 'Teko'; }
	$font_navigation = $martanda_settings[ 'font_navigation' ];
	if ( $font_navigation == 'inherit' ) { $font_navigation = 'Teko'; }
	$font_buttons = $martanda_settings[ 'font_buttons' ];
	if ( $font_buttons == 'inherit' ) { $font_buttons = 'Teko'; }
	$font_heading_1 = $martanda_settings[ 'font_heading_1' ];
	if ( $font_heading_1 == 'inherit' ) { $font_heading_1 = 'Teko'; }
	$font_heading_2 = $martanda_settings[ 'font_heading_2' ];
	if ( $font_heading_2 == 'inherit' ) { $font_heading_2 = 'Teko'; }
	$font_heading_3 = $martanda_settings[ 'font_heading_3' ];
	if ( $font_heading_3 == 'inherit' ) { $font_heading_3 = 'Teko'; }
	$font_heading_4 = $martanda_settings[ 'font_heading_4' ];
	if ( $font_heading_4 == 'inherit' ) { $font_heading_4 = 'Teko'; }
	$font_heading_5 = $martanda_settings[ 'font_heading_5' ];
	if ( $font_heading_5 == 'inherit' ) { $font_heading_5 = 'Teko'; }
	$font_heading_6 = $martanda_settings[ 'font_heading_6' ];
	if ( $font_heading_6 == 'inherit' ) { $font_heading_6 = 'Teko'; }
	$font_footer = $martanda_settings[ 'font_footer' ];
	if ( $font_footer == 'inherit' ) { $font_footer = 'Teko'; }
	$font_fixed_side = $martanda_settings[ 'font_fixed_side' ];
	if ( $font_fixed_side == 'inherit' ) { $font_fixed_side = 'Teko'; }
	
	$css->set_selector( $bodyclass );
	$css->add_property( '--martanda--font-body', esc_attr( $bodyfont ) );
	$css->add_property( '--martanda--font-site-title', esc_attr( $font_site_title ) );
	$css->add_property( '--martanda--font-navigation', esc_attr( $font_navigation ) );
	$css->add_property( '--martanda--font-buttons', esc_attr( $font_buttons ) );
	$css->add_property( '--martanda--font-heading-1', esc_attr( $font_heading_1 ) );
	$css->add_property( '--martanda--font-heading-2', esc_attr( $font_heading_2 ) );
	$css->add_property( '--martanda--font-heading-3', esc_attr( $font_heading_3 ) );
	$css->add_property( '--martanda--font-heading-4', esc_attr( $font_heading_4 ) );
	$css->add_property( '--martanda--font-heading-5', esc_attr( $font_heading_5 ) );
	$css->add_property( '--martanda--font-heading-6', esc_attr( $font_heading_6 ) );
	$css->add_property( '--martanda--font-footer', esc_attr( $font_footer ) );
	$css->add_property( '--martanda--font-fixed-side', esc_attr( $font_fixed_side ) );
	
	// Allow us to hook CSS into our output
	do_action( 'martanda_font_family_css', $css );

	return apply_filters( 'martanda_font_family_css_output', $css->css_output() );
}

// Overwrite theme URL
function martanda_theme_uri_link() {
	return 'https://wpkoi.com/mahan-wpkoi-wordpress-theme/';
}

// Extra cutomizer functions
if ( ! function_exists( 'mahan_customize_register' ) ) {
	add_action( 'customize_register', 'mahan_customize_register' );
	function mahan_customize_register( $wp_customize ) {
				
		// Add Mahan customizer section
		$wp_customize->add_section(
			'mahan_layout_effects',
			array(
				'title' => __( 'Mahan Effects', 'mahan' ),
				'priority' => 24,
			)
		);
		
		// Noise image
		$wp_customize->add_setting(
			'mahan_settings[noise_image]',
			array(
				'default' => get_stylesheet_directory_uri().'/img/mahan-noise.webp',
				'type' => 'option',
				'sanitize_callback' => 'esc_url_raw'
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Image_Control(
				$wp_customize,
				'mahan_settings[noise_image]',
				array(
					'label' => __( 'Background noise image', 'mahan' ),
					'section' => 'mahan_layout_effects',
					'priority' => 10,
					'settings' => 'mahan_settings[noise_image]',
					'description' => __( 'Recommended size: 100*100px.', 'mahan' )
				)
			)
		);
		
	}
}

// Mahan effects css
if ( ! function_exists( 'mahan_effect_css' ) ) {
	function mahan_effect_css() {
		// Get Customizer settings
		$mahan_settings = get_option( 'mahan_settings' );
		
		$noise_image	 = isset( $mahan_settings['noise_image'] ) ? $mahan_settings['noise_image'] : get_stylesheet_directory_uri().'/img/mahan-noise.webp';
		
		$mahan_extracss = '.mahan-noise{background: transparent url(' . esc_url( $noise_image ) . ') repeat 0 0;}';
		
		return $mahan_extracss;
	}
}

// The dynamic styles of the parent theme added inline to the parent stylesheet.
// For the customizer functions it is better to enqueue after the child theme stylesheet.
if ( ! function_exists( 'mahan_remove_parent_dynamic_css' ) ) {
	add_action( 'init', 'mahan_remove_parent_dynamic_css' );
	function mahan_remove_parent_dynamic_css() {
		remove_action( 'wp_enqueue_scripts', 'martanda_enqueue_dynamic_css', 50 );
	}
}

// Enqueue this CSS after the child stylesheet, not after the parent stylesheet.
if ( ! function_exists( 'mahan_enqueue_parent_dynamic_css' ) ) {
	add_action( 'wp_enqueue_scripts', 'mahan_enqueue_parent_dynamic_css', 50 );
	function mahan_enqueue_parent_dynamic_css() {
		$css = martanda_get_font_face_styles() . martanda_font_family_css() . martanda_base_css() . mahan_effect_css();

		// escaped secure before in parent theme
		wp_add_inline_style( 'martanda-child', $css );
	}
}

//Adds div to footer for the noise animation
if ( ! function_exists( 'mahan_noise_holder' ) ) {
	add_action( 'martanda_after_footer_content', 'mahan_noise_holder' );
	function mahan_noise_holder() {
		?>
		<div class="mahan-noise"></div>
        <?php
	}
}