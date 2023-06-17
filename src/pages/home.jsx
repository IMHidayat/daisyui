import { useEffect, useState } from "react";
import "../sass/home.sass";

export default function Home() {
  let [time, setTime] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) setTime((time) => time + 60);
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <main className="flex md:px-32 md:py-10">
        {/* BACKGROUND */}
        <article className="article_bg mb-10">
          <section>
            <div className="bg-base-content">BASE CONTENT</div>
            <div className="bg-base-100">BASE 100</div>
            <div className="bg-base-200">BASE 200</div>
            <div className="bg-base-300">BASE 300</div>
            <div className="bg-primary">PRIMARY</div>
            <div className="bg-secondary">SECONDARY</div>
            <div className="bg-warning">WARNING</div>
            <div className="bg-info">INFO</div>
            <div className="bg-error">ERROR</div>
          </section>
        </article>
        {/* ALERT */}
        <article>
          <section>
            <h1 className="pt-6">Alert</h1>
            <div className="grid gap-5 p-5">
              <div className="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>12 unread messages. Tap to see.</span>
              </div>
              <div className="alert shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-bold">New message!</h3>
                  <div className="text-xs">You have 1 unread message</div>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-primary btn-sm">Show</button>
                  <button className="btn btn-outline btn-sm hover:bg-secondary hover:text-black">Hide</button>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* ARTBOARD */}
        <article className="article_artboard">
          <section>
            <h1 className="pt-6">Artboard</h1>
            <div className="flex p-5 gap-10 flex-wrap justify-center items-center">
              <div className="artboard phone-1 grid">320×568</div>
              <div className="artboard artboard-horizontal phone-1 grid">568×320</div>
            </div>
          </section>
        </article>
        {/* AVATAR & BADGE */}
        <article className="col_2">
          <section>
            <h1 className="pt-6">Avatar</h1>
            <div className="grid p-5 py-10 gap-10 justify-items-center md:grid-cols-3 ">
              <div>
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://i.ibb.co/x53Qr27/kekw.jpg" alt="Avatar" />
                  </div>
                </div>
              </div>
              <div>
                <div className="avatar online">
                  <div className="w-16 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/x53Qr27/kekw.jpg" />
                  </div>
                </div>
              </div>
              <div>
                <div className="avatar-group -space-x-6">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://i.ibb.co/x53Qr27/kekw.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://i.ibb.co/x53Qr27/kekw.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://i.ibb.co/x53Qr27/kekw.jpg" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-12 bg-neutral-focus text-neutral-content">
                      <span>+99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1 className="pt-6">Badge </h1>
            <div className="grid p-5 py-10 justify-center items-center ">
              <span className="badge">+99</span>
            </div>
          </section>
        </article>
        {/* BOTTOM NAV */}
        <article>
          <section>
            <h1 className="pt-6">Bottom Navigation</h1>
            <div className="p-5 py-10">
              <div className="btm-nav relative">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </button>
                <button className="active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </article>
        {/* BREADCRUMB & BUTTON */}
        <article className="col_2">
          <section>
            <h1 className="pt-6 ">Breadcrumb</h1>
            <div className="flex flex-wrap justify-center gap-5 p-5 py-10">
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Documents</a>
                  </li>
                  <li>Add Document</li>
                </ul>
              </div>
              <div className="max-w-xs text-sm breadcrumbs">
                <ul>
                  <li>
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Add Document
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h1 className="pt-6">Button</h1>
            <div className="flex p-5 py-10 sm:gap-5 flex-wrap justify-center items-center ">
              <button className="btn btn-primary">Click</button>
            </div>
          </section>
        </article>
        {/* CARD */}
        <article>
          <section>
            <h1 className="pt-6">CARD</h1>
            <div className="flex p-5 py-10 gap-10 flex-wrap items-center justify-center">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side max-w-3xl bg-base-100 shadow-xl">
                <figure>
                  <img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p className="mb-3">Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end ">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* CAROUSEL */}
        <article>
          <section>
            <h1 className="pt-6">CAROUSEL</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="carousel rounded-box">
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
                </div>
              </div>
              <div className="carousel w-64 rounded-box">
                <div className="carousel-item w-full">
                  <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
                </div>
                <div className="carousel-item w-full">
                  <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item w-full">
                  <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
                </div>
                <div className="carousel-item w-full">
                  <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
                </div>
                <div className="carousel-item w-full">
                  <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
                </div>
                <div className="carousel-item w-full">
                  <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item w-full">
                  <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
                </div>
              </div>
              <div className="carousel carousel-vertical h-96 rounded-box">
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
                </div>
              </div>
              <div className="carousel carousel-center max-w-md bg-neutral gap-4 p-4 rounded-box">
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                  <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
                </div>
              </div>
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* CHAT BUBBLE */}
        <article>
          <section>
            <h1 className="pt-6">CHAT BUBBLE</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="w-96">
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://i.ibb.co/x53Qr27/kekw.jpg" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                  </div>
                  <div className="chat-bubble">You were the Chosen One!</div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://i.ibb.co/x53Qr27/kekw.jpg" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                  </div>
                  <div className="chat-bubble">I hate you!</div>
                  <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* CHECKBOX & COLLAPSE */}
        <article className="col_2">
          <section>
            <h1 className="pt-6">CHECKBOX</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="form-control">
                <label className="label gap-5 cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" className="checkbox" />
                </label>
              </div>
            </div>
          </section>
          <section>
            <h1 className="pt-6">COLLAPSE</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div tabIndex={0} className="collapse w-full bg-base-200">
                <div className="collapse-title text-xl font-medium">Focus me to see content</div>
                <div className="collapse-content">
                  <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
              </div>
              <div className="collapse w-full bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">Click me to show/hide content</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* COUNTDOWN */}
        <article>
          <section>
            <h1 className="pt-6">COUNTDOWN</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <span className="countdown font-mono text-6xl">
                <span style={{ "--value": time }}></span>
              </span>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 10 }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 24 }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 45 }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* DIVIDER */}
        <article>
          <section>
            <h1 className="pt-6">DIVIDER</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 pb-10">
              <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                <div className="divider">OR</div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
              </div>
              <div className="flex w-full">
                <div className="grid h-20 flex-grow card rounded-box place-items-center">content</div>
                <div className="divider divider-horizontal text-xs">OR</div>
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
              </div>
            </div>
          </section>
        </article>
        {/* DRAWER */}
        <article>
          <section>
            <h1 className="pt-6">DRAWER</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="drawer h-96 border border-base-100">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content grid place-items-center">
                  {/* Page content here */}
                  <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
                    Open drawer
                  </label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                      <a>Sidebar Item 1</a>
                    </li>
                    <li>
                      <a>Sidebar Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="drawer h-96 border border-base-100">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                  {/* Navbar */}
                  <div className="w-full navbar  bg-base-100">
                    <div className="flex-none lg:hidden">
                      <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                      </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Navbar Title</div>
                    <div className="flex-none hidden lg:block">
                      <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                        <li>
                          <a>Navbar Item 1</a>
                        </li>
                        <li>
                          <a>Navbar Item 2</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Page content here */}
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-80 h-full bg-base-200">
                    {/* Sidebar content here */}
                    <li>
                      <a>Sidebar Item 1</a>
                    </li>
                    <li>
                      <a>Sidebar Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* DROPDOWN & FILE INPUT */}
        <article className="col_2">
          <section>
            <h1 className="pt-6">DROPDOWN</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1">
                  Click
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h1 className="pt-6">FILE INPUT</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <input type="file" className="file-input w-full max-w-xs" />
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Pick a file</span>
                  <span className="label-text-alt">Alt label</span>
                </label>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                <label className="label">
                  <span className="label-text-alt">Alt label</span>
                  <span className="label-text-alt">Alt label</span>
                </label>
              </div>
            </div>
          </section>
        </article>
        {/* FOOTER */}
        <article>
          <section>
            <h1 className="pt-6">FOOTER</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <footer className="footer items-center p-4 bg-base-200">
                <div className="items-center grid-flow-col">
                  <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
                    <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                  </svg>
                  <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                </div>
              </footer>
              <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                  <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
                    <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                  </svg>
                  <p>
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                  </p>
                </div>
                <div>
                  <span className="footer-title">Services</span>
                  <a className="link link-hover">Branding</a>
                  <a className="link link-hover">Design</a>
                  <a className="link link-hover">Marketing</a>
                  <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                  <span className="footer-title">Company</span>
                  <a className="link link-hover">About us</a>
                  <a className="link link-hover">Contact</a>
                  <a className="link link-hover">Jobs</a>
                  <a className="link link-hover">Press kit</a>
                </div>
                <div>
                  <span className="footer-title">Legal</span>
                  <a className="link link-hover">Terms of use</a>
                  <a className="link link-hover">Privacy policy</a>
                  <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                  <span className="footer-title">Social</span>
                  <div className="grid grid-flow-col gap-4">
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </section>
        </article>
        {/* HERO */}
        <article>
          <section>
            <h1 className="pt-6">HERO</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                  <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content max-w-3xl flex-col lg:flex-row">
                  <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content max-w-4xl flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero min-h-screen" style={{ backgroundImage: 'url("https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* INDICATOR */}
        <article>
          <section>
            <h1 className="pt-6">INDICATOR</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="indicator">
                <span className="indicator-item badge badge-secondary"></span>
                <div className="grid w-32 h-32 bg-base-200 place-items-center">content</div>
              </div>
              <div className="indicator">
                <span className="indicator-item badge badge-ghost">99+</span>
                <button className="btn btn-primary">Inbox</button>
              </div>
              <div className="tabs">
                <a className="tab tab-lifted">Messages</a>
                <a className="indicator tab tab-lifted tab-active">
                  Notifications
                  <span className="indicator-item badge">8</span>
                </a>
                <a className="tab tab-lifted">Requests</a>
              </div>
            </div>
          </section>
        </article>
        {/* TEXT INPUT */}
        <article>
          <section>
            <h1 className="pt-6">TEXT INPUT</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                  <span className="label-text-alt">Top Right label</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                  <span className="label-text-alt">Bottom Right label</span>
                </label>
              </div>
            </div>
          </section>
        </article>
        {/* JOIN */}
        <article className="article_join">
          <section>
            <h1 className="pt-6">JOIN</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="join join-vertical lg:join-horizontal">
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Button</button>
              </div>
              <div className="join">
                <input className="join-item btn" type="radio" name="options" aria-label="Radio 1" />
                <input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
                <input className="join-item btn" type="radio" name="options" aria-label="Radio 3" />
              </div>
            </div>
          </section>
        </article>
        {/* KBD LINK LOADING MASK */}
        <article className="col_4">
          <section>
            <h1 className="pt-6">KBD</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <kbd className="kbd">Shift</kbd>
            </div>
          </section>
          <section>
            <h1 className="pt-6">LINK</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <a className="link link-primary">simple link</a>
            </div>
          </section>
          <section>
            <h1 className="pt-6">LOADING</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          </section>
          <section>
            <h1 className="pt-6">MASK</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <img className="mask mask-triangle-4" width={90} src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />
            </div>
          </section>
        </article>
        {/* MENU */}
        <article>
          <section>
            <h1 className="pt-6">MENU</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <ul className="menu bg-base-200 rounded-box">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
              <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
                <li>
                  <a className="tooltip" data-tip="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="tooltip" data-tip="Details">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="tooltip" data-tip="Stats">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </a>
                </li>
              </ul>
              <ul className="menu bg-base-200 w-56 rounded-box">
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Item 2
                  </a>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Item 1
                  </a>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Item 3
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </article>
        {/* CODE MOCKUP */}
        <article>
          <section>
            <h1 className="pt-6">CODE MOCKUP</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="mockup-code bg-base-200">
                <pre data-prefix="$">
                  <code>npm i daisyui</code>
                </pre>
              </div>
            </div>
          </section>
        </article>
        {/* PHONE MOCKUP */}
        <article>
          <section>
            <h1 className="pt-6">Phone Mockup</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">Hi.</div>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* WINDOW MOCKUP */}
        <article>
          <section>
            <h1 className="pt-6">WINDOW MOCKUP</h1>
            <div className="p-5 py-10">
              <div className="mockup-window border bg-base-300">
                <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
              </div>
            </div>
          </section>
        </article>
        {/* MODAL */}
        <article>
          <section>
            <h1 className="pt-6">MODAL</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <button className="btn btn-primary" onClick={() => window.my_modal_1.showModal()}>
                MODAL
              </button>
              <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box max-w-xl">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
              <button className="btn btn-primary" onClick={() => window.my_modal_2.showModal()}>
                MODAL OUTSIDE
              </button>
              <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click outside to close</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </section>
        </article>
        {/* NAVBAR */}
        <article>
          <section>
            <h1 className="pt-6">NAVBAR</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="navbar bg-base-100">
                <div className="flex-1">
                  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none gap-2">
                  <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                  </div>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li>
                        <a>Settings</a>
                      </li>
                      <li>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="navbar bg-base-100">
                <div className="navbar-start">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li>
                        <a>Homepage</a>
                      </li>
                      <li>
                        <a>Portfolio</a>
                      </li>
                      <li>
                        <a>About</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="navbar-center">
                  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-end">
                  <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                  </button>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                      </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                      <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: </span>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar bg-base-100">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
              </div>
            </div>
          </section>
        </article>
        {/* PAGINATION */}
        <article>
          <section>
            <h1 className="pt-6">PAGINATION</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="join">
                <button className="join-item btn">1</button>
                <button className="join-item btn btn-active">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
              </div>
              <div className="join grid grid-cols-2">
                <button className="join-item btn btn-outline">Previous page</button>
                <button className="join-item btn btn-outline">Next</button>
              </div>
              <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">Page 22</button>
                <button className="join-item btn">»</button>
              </div>
            </div>
          </section>
        </article>
        {/* PROGRESS */}
        <article className="col_3">
          <section>
            <h1 className="pt-6">PROGRESS</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <progress className="progress w-56" value="40" max="100"></progress>
            </div>
          </section>
          <section>
            <h1 className="pt-6">RADIAL PROGRESS</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="radial-progress" style={{ "--value": 70 }}>
                70%
              </div>
            </div>
          </section>
          <section>
            <h1 className="pt-6">RADIO</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <input type="radio" name="radio-1" className="radio" />
              <input type="radio" name="radio-1" className="radio" />
              <div className="w-40">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Red pill</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Blue pill</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                  </label>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* RANGE SLIDER RATING SELECT */}
        <article className="col_3">
          <section>
            <h1 className="pt-6">RANGE SLIDER</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <input type="range" min={0} max="100" value="40" className="range" />
              <input type="range" min={0} max="100" value="25" className="range" step="25" />
              <div className="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
          </section>
          <section>
            <h1 className="pt-6">RATING</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="rating">
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" checked />
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" />
              </div>
            </div>
          </section>
          <section>
            <h1 className="pt-6">SELECT</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  Pick your favorite Simpson
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Pick the best fantasy franchise</span>
                  <span className="label-text-alt">Alt label</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
                <label className="label">
                  <span className="label-text-alt">Alt label</span>
                  <span className="label-text-alt">Alt label</span>
                </label>
              </div>
            </div>
          </section>
        </article>
        {/* STACK */}
        <article>
          <section>
            <h1 className="pt-6">STACK</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="stack">
                <div className="card shadow-md bg-primary text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">Notification 1</h2>
                    <p>You have 3 unread messages. Tap here to see.</p>
                  </div>
                </div>
                <div className="card shadow bg-primary text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">Notification 2</h2>
                    <p>You have 3 unread messages. Tap here to see.</p>
                  </div>
                </div>
                <div className="card shadow-sm bg-primary text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">Notification 3</h2>
                    <p>You have 3 unread messages. Tap here to see.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* STAT */}
        <article>
          <section>
            <h1 className="pt-6">STAT</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Total Page Views</div>
                  <div className="stat-value">89,400</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>
              </div>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div className="stat-title">Total Likes</div>
                  <div className="stat-value text-primary">25.6K</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div className="stat-title">Page Views</div>
                  <div className="stat-value text-secondary">2.6M</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <div className="avatar online">
                      <div className="w-16 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="stat-value">86%</div>
                  <div className="stat-title">Tasks done</div>
                  <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>
              </div>
            </div>
          </section>
        </article>
        {/* STEPS */}
        <article>
          <section>
            <h1 className="pt-6">STEPS</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <ul className="steps">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
              </ul>
              <ul className="steps steps-vertical lg:steps-horizontal">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
              </ul>
            </div>
          </section>
        </article>
        {/* SWAP TAB */}
        <article className="col_2">
          <section>
            <h1 className="pt-6">SWAP</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <label className="btn btn-circle swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />
                {/* sun icon */}
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                {/* moon icon */}
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </section>
          <section>
            <h1 className="pt-6">TAB</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="tabs">
                <a className="tab tab-bordered">Tab 1</a>
                <a className="tab tab-bordered tab-active">Tab 2</a>
                <a className="tab tab-bordered">Tab 3</a>
              </div>
              <div className="tabs tabs-boxed">
                <a className="tab">Tab 1</a>
                <a className="tab tab-active">Tab 2</a>
                <a className="tab">Tab 3</a>
              </div>
            </div>
          </section>
        </article>
        {/* TABLE */}
        <article>
          <section>
            <h1 className="pt-6">TABLE</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                      </td>
                      <td>Purple</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                      </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Brice Swyre</div>
                            <div className="text-sm opacity-50">China</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Carroll Group
                        <br />
                        <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                      </td>
                      <td>Red</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                      </th>
                    </tr>
                  </tbody>
                  {/* foot */}
                  <tfoot>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>
        </article>
        {/* TEXTAREA TOAST TOGGLE TOOLTIP */}
        <article className="col_4">
          <section>
            <h1 className="pt-6">TEXTAREA</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
            </div>
          </section>
          <section>
            <h1 className="pt-6">TOAST</h1>
            <div className="flex relative flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="toast toast-top toast-center absolute">
                <div className="alert alert-info">
                  <span>New mail arrived.</span>
                </div>
                <div className="alert alert-success">
                  <span>Message sent successfully.</span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1 className="pt-6">TOGGLE</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <input type="checkbox" className="toggle" />
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text me-10">Remember me</span>
                  <input type="checkbox" className="toggle" />
                </label>
              </div>
            </div>
          </section>
          <section>
            <h1 className="pt-6">TOOLTIP</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 p-5 py-10">
              <div className="tooltip" data-tip="hello">
                <button className="btn">Hover me</button>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
