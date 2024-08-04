<script lang="ts">

let clientX = $state(0);
let clientY = $state(0);
let isHovering = $state(false);
let isClicking = $state(false);
let isHoveringInteractive = $state(false);

const handleMouseMove = (e: MouseEvent) => {
  clientX = e.clientX;
  clientY = e.clientY;

  const target = <HTMLElement>e.target;
  isHoveringInteractive = target.matches('a, button, [role="button"], input, textarea, select') || <boolean>target.parentElement?.matches('a, button, [role="button"], input, textarea, select');
}

const handleMouseDown = () => {
  isClicking = true;
}

const handleMouseUp = () => {
  isClicking= false;
}

const handleMouseEnter = () => {
  isHovering = true;
}

const handleMouseLeave = () => {
  isHovering = false;
}

</script>

<svelte:window 
  on:mousemove={handleMouseMove}
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
/>
<svelte:body 
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
/>

<div
  class="custom-cursor"
  class:hovering={isHoveringInteractive}
  class:clicking={isClicking}
  style={`left: ${clientX}px; top: ${clientY}px;`}
>
  <div class="test"> </div>
</div>


<style lang="postcss">
  :global(html) {
    cursor: none;
  }
  .custom-cursor {
    @apply fixed pointer-events-none z-50 mix-blend-multiply;
    background-image: url("/Group.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 32px;
    height: 64px;
    transform: rotate(-15deg);
  }
  :global(a:hover, button:hover, [role="button"]:hover, input:hover, textarea:hover, select:hover) {
    cursor: none;
  }
  .hovering.custom-cursor {
    transform: 
      scale(1.2)
      rotate(-15deg);
    background-image: url("/Group 15.svg");
    mix-blend-mode: normal;
  }
  .clicking.custom-cursor {
    transform: 
      scale(1.5)
      rotate(-15deg);
    transition: scale .5s bounce; 
  }
</style>
