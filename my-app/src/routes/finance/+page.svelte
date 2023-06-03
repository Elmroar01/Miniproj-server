<script>
    import { Button } from "flowbite-svelte";
</script>

<ul class="grid w-full h-full gap-10 md:grid-cols-3">
    <Button href="/general">
        <button
            class="relative inline-flex items-center justify-center w-80 h-24 p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-pink dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ml-2"
        >
            <span class=" text-white"> General Journal </span>
        </button>
    </Button>
    <Button href="/ledger">
        <button
            class="relative inline-flex items-center justify-center w-80 h-24 p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
            <span class=" text-white"> General Ledger </span>
        </button>
    </Button>
    <Button href="/income">
        <button
            class="relative inline-flex items-center justify-center w-80 h-24 p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
            <span class=" text-white"> Income Statement </span>
        </button>
    </Button>
    <Button href="/stock">
        <button
            class="relative inline-flex items-center justify-center w-80 h-24 p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ml-2"
        >
            <span class=" text-white"> Inventory Stock Card </span>
        </button>
    </Button>
    <Button href="/order">
        <button
            class="relative inline-flex items-center justify-center w-80 h-24 p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
            <span class=" text-white"> Purchase Order </span>
        </button>
    </Button>
    <Button href="/invoice">
        <button
            class="relative inline-flex items-center justify-center w-80 h-24 p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        >
            <span class=" text-black"> Paid Sale Invoice </span>
        </button>
    </Button>
</ul>
