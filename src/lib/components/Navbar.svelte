<script>
	import Lightswitch from './Lightswitch.svelte';
</script>

<nav
	class="navbar sticky bg-navy rounded-lg justify-between items-center lg:flex-col lg:gap-20 lg:fixed lg:my-20 lg:absolute lg:inset-y-0 lg:left-0 lg:w-16 lg:h-5/6 container mx-auto mt-2"
>
	<div class="flex">
		<img src="/src/lib/assets/logo.svg" alt="logo" />
	</div>
	<div class="gap-4 md:gap-8 lg:flex-col">
		<img src="/src/lib/assets/icon-nav-home.svg" alt="home" />
		<img src="/src/lib/assets/icon-nav-movies.svg" alt="movies" />
		<img src="/src/lib/assets/icon-nav-tv-series.svg" alt="tv-series" />
		<img src="/src/lib/assets/icon-nav-bookmark.svg" alt="bookmark" />
	</div>
	<div class="lg:flex-col gap-2">
		<img src="/src/lib/assets/image-avatar.png" alt="avatar" class="w-8" />
		<Lightswitch />
	</div>
</nav>
