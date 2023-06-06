<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";

  import { onMount } from "svelte";
 // import data from "../../data.json";
  //const a = data;
  let value = "";
  let items = [];
  let searchTerm = "";

  onMount(async function fetchData() {
    await fetchItems();
  });


async function fetchItems() {
    try {
      const response = await fetch("http://localhost:5000/finance/PurchasingOrder", {
        method: "POST",
        body: JSON.stringify({
          UserRole: "Manager",
          PONumber: searchTerm,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      items = data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
    

  const submitted = () => {
    alert(`You are searching: ${value}`);
    searchTerm = value;
    fetchItems();
  };

  let searchVisible = false;

  const toggleVisible = () => {
    searchVisible = true;
  };

  $: filteredItems = items.filter((item) => item.PONo.toLowerCase());
</script>

{#if !searchVisible}
  <form on:submit|preventDefault={submitted}>
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required
        bind:value
      />
      <button
        on:click={toggleVisible}
        type="submit"
        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  </form>
{/if}

{#if searchVisible}
  <div>
    <form on:submit|preventDefault={submitted}>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
          bind:value
        />
        <button
          on:click={toggleVisible}
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
    
    <p class="text-3xl text-center">Purchase Order</p>
    {#each filteredItems as item}
    <div class="alignright text-lg mr-64 mt-10">
      <p class=" text-lg">PO No:{item.PONo}</p>
      <br />
      <p class="text-lg">Payment No:{item.PaymentNo}</p>
      <br />
      <p class=" text-lg">Date:{item.DatetimeCreated}</p>
    </div>
    <div class="mt-44" />
    <div class="alignlefttext-lg ml-64">
      <p class=" text-lg">Customer ID:{item.CustomerID}</p>
      <br />
      <p class=" text-lg">Customer:{item.Company}:</p>
      <br />
      <p class=" text-lg">Tax Payer ID:{item.TaxPayerID}</p>
      
    </div>
    {/each}
  </div>
  
  <Table class="mt-5">
    <TableHead>
      <TableHeadCell>Item</TableHeadCell>
      <TableHeadCell>Price/Litre</TableHeadCell>
      <TableHeadCell>QTY(LITRE)</TableHeadCell>
      <TableHeadCell>Amount</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each  filteredItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.GasType}</TableBodyCell>
        <TableBodyCell>{item.PriceLitre}</TableBodyCell>
        <TableBodyCell>{item.Volume}</TableBodyCell>
        <TableBodyCell>{item.TotalPrice}</TableBodyCell>
      </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
{/if}

<style>
  .alignleft {
    float: left;
  }
  .alignright {
    float: right;
  }
</style>
