
<style>
    .layout {
        display: flex;
        height: 100vh;
        overflow: hidden;
        background: #fafafa;
    }

    /* 햄버거 버튼 */
    .hamburger {
        position: fixed;
        top: 10px;
        left: -7px; /* 기본 위치 */
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 1001;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 44px;
        height: 30px;
        transition: left 0.3s ease; /* ✅ 부드럽게 이동 */
    }

    /* ✅ 메뉴가 열릴 때 약간 오른쪽으로 이동 */
    .hamburger.open {
        left: 80px;
    }

    .bar {
        width: 100%;
        height: 2px;
        background-color: #6e6e6e;
        border-radius: 2px;
    }

    /* 사이드바 */
    .sidebar {
        position: fixed;
        top: 0;
        left: -220px;
        width: 100px;
        height: 100vh;
        background: #f2f2f2;
        border-right: 1px solid #ddd;
        padding: 16px 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: left 0.3s ease;
        z-index: 1000;
    }

    .sidebar.open {
        left: 0;
    }

    .sidebar .title {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 10px;
    }

    button {
        background: #fff;
        border: 1px solid #ccc;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        text-align: left;
        transition: all 0.2s ease;
        margin: 0;
    }

    .hamburger:hover {
        background: #cecece;
        color: black;
    }

    .sidebar button:hover {
        background: #b6d2ff;
        color: black;
    }

    .is-active {
        background: #4b8bf4;
        color: white;
        border-color: #4b8bf4;
        font-weight: bold;
    }

    .content {
        flex: 1;
        padding: 20px;
        margin-left: 0;
        width: 100%;
        transition: margin-left 0.3s ease;
        overflow: scroll;
    }

    /* 사이드바가 열렸을 때 콘텐츠 밀림 효과 */
    .sidebar.open ~ .content {
        margin-left: 110px;
    }
</style>

<div class="layout">
    <!-- ✅ 햄버거 버튼 -->
    <button class="hamburger {isOpen ? 'open' : ''}" on:click={toggleMenu}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </button>

    <!-- ✅ 사이드바 메뉴 -->
    <nav class="sidebar {isOpen ? 'open' : ''}">
        <h2 class="title">메뉴</h2>

        <!-- ✅ active 클래스 적용 -->
        <button class:is-active={$currentPage === "custom"} on:click={() => currentPage.set("custom")}>
        커스텀
        </button>

        <button class:is-active={$currentPage === "geisha"} on:click={() => currentPage.set("geisha")}>
        게이샤
        </button>

    </nav>

    <!-- ✅ 콘텐츠 -->
    <main class="content">
        <svelte:component this={PageComponent} />
    </main>
</div>

<script>
    import { writable, get } from "svelte/store";
    import CustomProfile from "../pages/custom_profile.svelte";
    import GeishaProfile from "../pages/geisha_profile.svelte";
    import Error from "../pages/error.svelte";

    // ✅ 기본 페이지는 커스텀 프로필
    const currentPage = writable("custom");

    // ✅ 메뉴 열림/닫힘 상태
    let isOpen = true;

    $: PageComponent =
        $currentPage === "custom"
          ? CustomProfile
          : $currentPage === "geisha"
          ? GeishaProfile
          : Error;

    function toggleMenu() {
        isOpen = !isOpen;
    }

      // ✅ 메뉴 버튼 색상용 상태 비교 함수
    function isActive(page) {
        return get(currentPage) === page;
    }
</script>

