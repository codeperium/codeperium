<script lang="ts">
</script>

<nav
	class="
        flex justify-between
        font-bold
        text-sm
        xl:w-80
        lg:w-72 lg:text-base
        md:w-64"
>
	<a
		href="/"
		class="
            active
            text-grey-dark
            h-[23px]
            tracking-tight
            leading-[23px]
            align-bottom
            pt-1
            lg:h-[25px] lg:leading-[25px]
            relative
            nav-before
            before:animate-nav-squares"
	>
		Home
	</a>
	<a
		href="/blog"
		class="
            text-grey-dark/60
            h-[23px]
            tracking-tight
            leading-[23px]
            align-bottom
            pt-1
            lg:h-[25px] lg:leading-[25px]
            hover:text-grey-dark
            relative
            nav-before
            before:animate-nav-squares"
	>
		Blog
	</a>
	<a
		href="/portfolio"
		class="
            text-grey-dark/60
            h-[23px]
            tracking-tight
            leading-[23px]
            align-bottom
            pt-1
            lg:h-[25px] lg:leading-[25px]
            hover:text-grey-dark
            relative
            nav-before
            before:animate-nav-squares"
	>
		Portfolio
	</a>
	<a
		href="/contact-us"
		class="
            text-grey-dark/60
            h-[23px]
            tracking-tight
            leading-[23px]
            align-bottom
            pt-1
            lg:h-[25px] lg:leading-[25px]
            hover:text-grey-dark
            relative
            nav-before
            before:animate-nav-squares"
	>
		Contact us
	</a>
</nav>

<style lang="postcss">
    .active {
        &::before {
            visibility: visible;
            opacity: 1.0;
            background-image: var(--icon-full);
            animation-duration: 0s;
        }
    }
</style>
