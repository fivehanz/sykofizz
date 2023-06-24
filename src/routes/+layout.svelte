<script>
	import '../app.css'; // tailwind css
	import Navbar from '$lib/header/Navbar.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import { AuthorizerProvider } from '@authorizerdev/authorizer-svelte';
	// import '@authorizerdev/authorizer-svelte/styles/default.css';
</script>

<div>
	<header>
		<Navbar />
	</header>
	
	<main>
		<AuthorizerProvider
			config={{
				authorizerURL: `https://auth-sf.hanz.lol/`,
				redirectURL: 'https://sykofizz.hanz.lol/',
				client_id: 'dc3079b8-9f48-4aaa-be12-c0cf8fd80bdf'
			}}
		>
			<slot />
		</AuthorizerProvider>
	</main>

	<div class="absolute bottom-0 w-full h-10">
		<Footer />
	</div>
</div>

<style>
</style>
