<script>
    import { onMount } from "svelte";
    //import data from "../../data.json";
    //const a = data;
    import {
      Table,
      TableBody,
      TableBodyCell,
      TableBodyRow,
      TableHead,
      TableHeadCell,
      TableSearch,
    } from "flowbite-svelte";
  let itemsl = [];
  let filteredItemsl = [];
  let searchTerml = "";

  onMount(async function fetchData() {
  try {
    const response = await fetch("http://localhost:5000/finance/GeneralLedger", {
      method: "POST",
      body: JSON.stringify({
        UserRole: "Manager"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    itemsl = data;
    filteredItemsl = itemsl;
    console.log(filteredItemsl);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

$: {
  filteredItemsl = itemsl.filter(
    (item) => item.Date.toLowerCase().includes(searchTerml.toLowerCase())
  );
}
  </script>
  
  <TableSearch
    placeholder="Search"
    hoverable={true}
    bind:inputValue={searchTerml}
  >
    <TableHead>
      <TableHeadCell>Date</TableHeadCell>
      <TableHeadCell>Explanation</TableHeadCell>
      <TableHeadCell>Ref No.</TableHeadCell>
      <TableHeadCell>Debit</TableHeadCell>
      <TableHeadCell>Credit</TableHeadCell>
      <TableHeadCell>BALANCE</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each filteredItemsl as item}
        <TableBodyRow>
          <TableBodyCell>{item.Date}</TableBodyCell>
          <TableBodyCell>{item.Explanation}</TableBodyCell>
          <TableBodyCell>{item.RefNo}</TableBodyCell>
          <TableBodyCell>{item.Debit}</TableBodyCell>
          <TableBodyCell>{item.Balance}</TableBodyCell>
          <TableBodyCell>{item.LedNo}</TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </TableSearch>
  