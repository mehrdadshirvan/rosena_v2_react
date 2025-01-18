// export default function MobileBottomMenu(){
//     return (
//         <>
//             <div                  className="md:hidden fixed bottom-0 w-full bg-white px-4 py-4 z-60  min-h-[75px] rounded-t-3xl border-t border-gray-300">
//                 <div className="grid grid-cols-10 justify-between">
//                     <div className="col-span-2">
//                         @guest()
//                         <a href="{{ url('/auth/login') }}"
//                            className="block {{ request()->is('auth/login') ? 'text-fourth' : 'text-gray-400' }}"
//                            title="ورود">
//                             <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg" className="mx-auto">
//                                 <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4"
//                                       stroke="{{ request()->is('/auth/login') ? '#83cc80' : '#9CA3AF' }}"
//                                       stroke-width="1.5" stroke-linecap="round"/>
//                                 <path d="M4 12H14M14 12L11 9M14 12L11 15"
//                                       stroke="{{ request()->is('/auth/login') ? '#83cc80' : '#9CA3AF' }}"
//                                       stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                             </svg>
//                             <span
//                                 className="block text-center {{ request()->is('auth/login') ? 'font-bold text-[13px]' : 'text-[10px]' }}">
//                     ورود
//                 </span>
//                         </a>
//                         <a href="{{ url('/profile') }}"
//                            className="block {{ request()->is('/profile') ? 'text-fourth' : 'text-gray-400' }}"
//                            title="پروفایل - {{ __(" APPLICATION_NAME") }}">
//                             <img src="{{ auth()->user()->avatar_url }}" alt="{{ auth()->user()->full_name }}"
//                                  className="-mt-1 mb-1 w-8 h-8 rounded-full m-auto "/>
//                             <span
//                                 className="block text-center {{ request()->is('profile*') ? 'font-bold text-[13px] text-fourth' : 'text-[10px]' }}">
//                     پروفایل
//                 </span>
//                         </a>
//                         @endauth
//                     </div>
//                     <div className="col-span-2">
//                         <a href="{{ url('/doctors') }}"
//                            className="block {{ request()->is('/doctors') ? 'text-first' : 'text-gray-400' }}"
//                            title="مشاوران - {{ __(" APPLICATION_NAME") }}">
//                             <svg width="30px" height="30px" viewBox="0 0 16 16" version="1.1"
//                                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
//                                  className="mx-auto {{ request()->is('doctors*') ? 'fill-fourth' : 'fill-gray-400' }}">
//                                 <path
//                                     d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path>
//                                 <path
//                                     d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path>
//                             </svg>
//                             <span
//                                 className="block text-center {{ request()->is('doctors*') ? 'font-bold text-[13px]' : 'text-[10px]' }}">
//                   مشاوران
//                 </span>
//                         </a>
//                     </div>
//                     <div className="col-span-2">
//                         <a href="{{ url('/') }}"
//                            className="block {{ request()->is('/') ? 'text-fourth' : 'text-gray-400' }}"
//                            title="خانه - {{ __(" APPLICATION_NAME") }}">
//                             <svg xmlns="http://www.w3.org/2000/svg"
//                                  className="mx-auto {{ request()->is('/') ? 'fill-fourth' : 'fill-gray-400' }}"
//                                  viewBox="0 0 48 48"
//                                  width="30px" height="30px">
//                                 <path
//                                     d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"/>
//                             </svg>
//                             <span
//                                 className="block  text-center {{ request()->is('/') ? 'font-bold text-[13px]' : 'text-[10px]' }}">خانه</span>
//                         </a>
//                     </div>
//                     <div className="col-span-2">
//                         <a href="{{ url('/forum') }}"
//                            className="block {{ request()->is('/forum') ? 'text-first' : 'text-gray-400' }}"
//                            title="تالار گفتگو - {{ __(" APPLICATION_NAME") }}">
//                             <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg"
//                                  className="mx-auto {{ request()->is('/forum') ? 'fill-fourth' : 'fill-gray-400' }}">
//                                 <path
//                                     d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
//                                     stroke-width="1.5" stroke-linecap="round"/>
//                                 <path d="M8 12H8.009M11.991 12H12M15.991 12H16" stroke="#ffffff" stroke-width="2"
//                                       stroke-linecap="round" stroke-linejoin="round"/>
//                             </svg>
//                             <span
//                                 className="block text-center {{ request()->is('forum') ? 'font-bold text-[13px]' : 'text-[10px]' }}">
//                   تالار گفتگو
//                 </span>
//                         </a>
//                     </div>
//                     <div className="col-span-2">
//                         <a href="{{ url('/') }}"
//                            className="block  {{ request()->is('/consultation') ? 'text-first' : 'text-gray-400' }}"
//                            title="مشاوره فروی - {{ __(" APPLICATION_NAME") }}">
//                             <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg"
//                                  className="mx-auto {{ request()->is('/forum') ? 'fill-fourth' : 'fill-gray-400' }}">
//                                 <path
//                                     d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
//                                     stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                             </svg>
//                             <span
//                                 className="block text-center {{ request()->is('consultation') ? 'font-bold text-[13px]' : 'text-[10px]' }}">
//                     مشاوره فوری
//                 </span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//
//         </>
//     )
// }
