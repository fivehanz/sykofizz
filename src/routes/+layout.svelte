<script>
	import "../app.css"; // tailwind css
  import Navbar from "$lib/header/Navbar.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<div>
  <header>
    <Navbar />
  </header>
	
  <main>
		<slot />
	</main>

  <div class="absolute bottom-0 w-full h-10">
  	<Footer />
  </div>
</div>

<style>
	
</style>
