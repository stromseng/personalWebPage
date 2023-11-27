<script>
    import "../app.css";
</script>


<div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="w-full navbar bg-base-300">
            <div class="flex-none md:hidden">
                <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <div class="navbar-start">
                <div class="btn btn-ghost hidden md:flex">
                    <div class="avatar">
                        <div class="w-10 rounded-full">
                            <img src="/images/profile-pic.jpg" alt="Magnus Strømseng" />
                        </div>
                    </div>
                    <a href="/" class="text-xl">Magnus A. Strømseng</a>
                </div>
            </div>
            <div class="navbar-center hidden md:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn btn-ghost btn-circle" href="https://github.com/Thrywyn">
                    <i class="fa-brands fa-github fa-2xl"></i></a>
                <a class="btn btn-ghost btn-circle"
                   href="https://www.linkedin.com/in/magnus-alexander-str%C3%B8mseng-063112214/">
                    <i class="fa-brands fa-linkedin fa-xl"></i></a>
            </div>
        </div>
        <slot />
    </div>
    <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200">
            <!-- Sidebar content here -->
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
        </ul>
    </div>
</div>