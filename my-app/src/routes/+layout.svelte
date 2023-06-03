<script>
  import "../app.postcss";

  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  // import { Router, Route, Link } from "svelte-navigator";
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/PTT-01.svg/512px-PTT-01.svg.png"
      class="mr-3 h-8 sm:h-9"
      alt="Flowbite Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      PTT TAS
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/finance" active={true}>Finance</NavLi>
    <NavLi href="/about">User Profile</NavLi>
    <NavLi href="/services">Operation Dashboard</NavLi>
    <NavLi href="/pricing">Manager Dashboard</NavLi>
    <NavLi href="/contact">Search Truck</NavLi>
  </NavUl>
</Navbar>

<slot />
