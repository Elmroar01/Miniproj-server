<script>
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";
</script>

<h3 class="text-center text-3xl">Inventory Stock Card</h3>
<p class="text-center text-xl my-2">Month: March 2022</p>

<Table class="mt-5  ">
    <TableHead>
        <TableHeadCell>Patrol Type</TableHeadCell>
        <TableHeadCell>Gasohol95</TableHeadCell>
        <TableHeadCell>Diesel</TableHeadCell>
    </TableHead>
    <TableBody>
        <TableBodyRow>
            <TableBodyCell>Beginning Stock</TableBodyCell>
            <TableBodyCell>1,123,200 ฿</TableBodyCell>
            <TableBodyCell>812,400 ฿</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Purchased</TableBodyCell>
            <TableBodyCell>115,466,800 ฿</TableBodyCell>
            <TableBodyCell>611,933,500 ฿</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Sold</TableBodyCell>
            <TableBodyCell>116,030,628 ฿</TableBodyCell>
            <TableBodyCell>612,016,993 ฿</TableBodyCell>
        </TableBodyRow>

        <TableBodyRow>
            <TableBodyCell>Ending Stock</TableBodyCell>
            <TableBodyCell>559,372 ฿</TableBodyCell>
            <TableBodyCell>728,907 ฿</TableBodyCell>
        </TableBodyRow>
    </TableBody>
</Table>
