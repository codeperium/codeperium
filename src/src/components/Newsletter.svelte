<script lang="ts">
	export const prerender = true;
	import type { FocusEventHandler } from 'svelte/elements';
	const placeholder = 'johndoe@gmail.com';
	let onFocus = $state(false);

	const handleInputFocusIn: FocusEventHandler<HTMLInputElement> = (e) => {
		e.currentTarget.placeholder = '';
		onFocus = true;
	};

	const handleInputFocusOut: FocusEventHandler<HTMLInputElement> = (e) => {
		e.currentTarget.placeholder = placeholder;
		onFocus = false;
	};
</script>

<div
	class="
        flex flex-col
        lg:flex-row lg:justify-between
        pb-8
        mb-8
        border-solid border-opacity-10 border-b border-white"
>
	<p 
    class="
      text-white text-center font-semibold leading-8 
      pb-6
      md:text-left
      md:text-2xl 
  ">
		Subscribe to our Newsletter!
	</p>
	<form action="" class="w-auto h-12">
		<div 
      class="
        flex 
        font-medium
        h-full 
        lg:max-w-[408px] 
    ">
			<input
				aria-label="email"
				type="text"
				{placeholder}
				onfocusin={handleInputFocusIn}
				onfocusout={handleInputFocusOut}
				class="
          h-full 
          bg-grey-light 
          text-white 
          pl-[10px] 
          w-[calc(100%_-_48px)] 
          lg:w-[360px] 
          focus:outline-none 
          focus:bg-gold 
          focus:text-grey-light"
			/>
				<input
					aria-label="Subscribe!"
					type="submit"
          id="subscribe"
					value=""
					class={`w-full h-full test align-top hidden`}
				/>

			<label for="subscribe"
				class={`
          w-12 h-12 
          mr-[-3px] 
          bg-gold 
          relative 
          before:icon 
          before:icon-ar-r 
          cursor-pointer 
          hover:before:icon-white 
          ${onFocus ? 'bg-grey-light before:icon-white hover:bg-gold' : 'before:icon-grey-light'} 
      `}> </label>
		</div>
	</form>
</div>

<style lang="postcss">
</style>
