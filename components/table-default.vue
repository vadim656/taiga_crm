<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="flex items-center justify-between p-4  bg-gray-800">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            class="inline-flex items-center text-gray-500  border  focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800  border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
            type="button"
          >
            <span class="sr-only">Действия</span>
            Действия
            <svg
              class="w-3 h-3 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            id="dropdownAction"
            class="z-10 hidden  divide-y  rounded-lg shadow w-44 bg-gray-700 divide-gray-600"
          >
            <ul
              class="py-1 text-sm text-gray-700 "
              aria-labelledby="dropdownActionButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 0 hover:bg-gray-600 hover:text-white"
                  >Reward</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 0 hover:bg-gray-600 hover:text-white"
                  >Promote</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 0 hover:bg-gray-600 hover:text-white"
                  >Activate account</a
                >
              </li>
            </ul>
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 0 hover:bg-gray-600  hover:text-white"
                >Delete User</a
              >
            </div>
          </div>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            class="block p-2 pl-10 text-sm  border  rounded-lg w-80   bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Поиск по услугам"
          />
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 ">
        <thead
          class="text-xs text-gray-700 uppercase  bg-gray-700 "
        >
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600   rounded  ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox</label
                >
              </div>
            </th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Position</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class=" bg-gray-800 hover: hover:bg-gray-600">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600   rounded  ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                />
                <label for="checkbox-table-search-3" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium  whitespace-nowrap text-white"
            >
              <img
                class="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese image"
              />
              <div class="pl-3 flex flex-col">
                <div class="text-base font-semibold">Leslie Livingston</div>
                <div class="font-normal text-gray-500">leslie@flowbite.com</div>
              </div>
            </th>
            <td class="px-6 py-4">ddd</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                Offline
              </div>
            </td>
            <td class="px-6 py-4">
              <!-- Modal toggle -->
              <a
                href="#"
                type="button"
                data-modal-show="editUserModal"
                class="font-medium  hover:underline"
                >Edit user</a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Edit user modal -->
      <div
        id="editUserModal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      >
        <div class="relative w-full h-full max-w-2xl md:h-auto">
          <!-- Modal content -->
          <form
            action="#"
            class="relative  rounded-lg shadow bg-gray-700"
          >
            <!-- Modal header -->
            <div
              class="flex items-start justify-between p-4 border-b rounded-t border-gray-600"
            >
              <h3 class="text-xl font-semibold  text-white">
                Edit user
              </h3>
              <button
                type="button"
                class=" bg-transparent  hover: rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                data-modal-hide="editUserModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium  text-white"
                    >First Name</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    class="shadow-sm  border   text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Bonnie"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block mb-2 text-sm font-medium  text-white"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    class="shadow-sm  border   text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Green"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium  text-white"
                    >Email</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm  border   text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example@company.com"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="phone-number"
                    class="block mb-2 text-sm font-medium  text-white"
                    >Phone Number</label
                  >
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    class="shadow-sm  border   text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. +(12)3456 789"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="department"
                    class="block mb-2 text-sm font-medium  text-white"
                    >Department</label
                  >
                  <input
                    type="text"
                    name="department"
                    id="department"
                    class="shadow-sm  border   text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Development"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="company"
                    class="block mb-2 text-sm font-medium  text-white"
                    >Company</label
                  >
                  <input
                    type="number"
                    name="company"
                    id="company"
                    class="shadow-sm  border   text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123456"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="current-password"
                    class="block mb-2 text-sm font-medium  text-white"
                    >Current Password</label
                  >
                  <input
                    type="password"
                    name="current-password"
                    id="current-password"
                    class="shadow-sm  border   text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="new-password"
                    class="block mb-2 text-sm font-medium  text-white"
                    >New Password</label
                  >
                  <input
                    type="password"
                    name="new-password"
                    id="new-password"
                    class="shadow-sm  border   text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
              </div>
            </div>
            <!-- Modal footer -->
            <div
              class="flex items-center p-6 space-x-2 border-t  rounded-b border-gray-600"
            >
              <button
                type="submit"
                class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
