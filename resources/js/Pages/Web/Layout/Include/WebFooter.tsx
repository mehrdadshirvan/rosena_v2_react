"use client"
import {Link} from "@inertiajs/react";

export default function WebFooter() {
    return (
        <>
            <footer className="bg-white border-t shadow-sm dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
                    <div className="lg:grid grid-cols-12">
                        <div className="col-span-5">
                            <div className="mb-6 md:mb-0">

                                <p className="text-secondary text-sm mb-2">تهران، شهرک غرب، خیابان محمدرضا شجریان، کوچه
                                    چهارم</p>
                                <p className="text-secondary text-sm mb-4">24 ساعته پاسخگوی شما هستیم</p>


                                <a href="tel:+982112345"
                                   className="text-secondary text-md font-bold mb-4 inline-block flex items-center gap-1">
                    <span className="inline-block"><svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0355 3.69531C7.73942 4.17137 4.349 7.56179 3.86133 11.8579" stroke="#666666"
                              stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.0268 7.82031C9.9716 8.21509 8.36928 9.82786 7.96289 11.8842" stroke="#666666"
                              stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M15.8929 15.2752C11.2717 19.8964 10.2151 14.5437 7.26593 17.4929C4.43283 20.326 2.79568 20.8949 6.3951 24.4943C6.84793 24.8542 9.71584 29.2084 19.7943 19.1417C29.8726 9.06324 25.5186 6.19531 25.1586 5.74247C21.5592 2.11983 20.9902 3.7686 18.1455 6.61331C15.2079 9.55091 20.5606 10.6075 15.9278 15.2403L15.8929 15.2752Z"
                              stroke="#666666" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></span>
                                    <span>021-12345</span>
                                </a>

                                <p className="text-blue-800 text-sm mb-6">
                                    ما را در شبکه های اجتماعی دنبال کنید!
                                </p>
                                <div className="flex justify-start items-center gap-4">
                                    <a href="#">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.46908 29.569V10.7471H1.21853V29.569H7.46908ZM4.34511 8.17779C6.52435 8.17779 7.88106 6.7325 7.88106 4.92628C7.84027 3.07891 6.52435 1.67395 4.38655 1.67395C2.24729 1.67395 0.850098 3.07891 0.850098 4.92611C0.850098 6.73234 2.20633 8.17763 4.30415 8.17763L4.34511 8.17779ZM10.9288 29.569H17.1789V19.0592C17.1789 18.4974 17.2197 17.9342 17.3848 17.5328C17.8365 16.4085 18.8649 15.2445 20.592 15.2445C22.8531 15.2445 23.7582 16.9704 23.7582 19.5009V29.569H30.0081V18.7772C30.0081 12.9961 26.9249 10.3059 22.8127 10.3059C19.4412 10.3059 17.9604 12.192 17.1378 13.4766H17.1794V10.7478H10.9292C11.0108 12.5136 10.9288 29.569 10.9288 29.569Z"
                                                fill="#353C94"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg width="30" height="31" viewBox="0 0 31 32" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.8304 2.32624L11.0698 1.60647C10.4802 1.44938 9.86542 1.41004 9.26059 1.49069C8.65577 1.57135 8.07279 1.77042 7.54492 2.07652C7.0171 2.38263 6.55477 2.78976 6.18438 3.27466C5.81398 3.75955 5.5428 4.31269 5.38631 4.90246L4.69727 7.50502C6.96954 4.6769 10.2368 2.82423 13.8304 2.32624Z"
                                                fill="#353C94"/>
                                            <path
                                                d="M1.72146 18.7096L1.04558 21.2595C0.729644 22.4497 0.899397 23.7166 1.5175 24.7817C2.13561 25.8467 3.15145 26.6226 4.34157 26.9386L6.97485 27.6409C4.1631 25.4301 2.2874 22.2413 1.72146 18.7096Z"
                                                fill="#353C94"/>
                                            <path
                                                d="M27.4224 5.94697L24.4688 5.16138C25.9613 6.30943 27.2109 7.74249 28.1451 9.37734C29.0793 11.0122 29.6795 12.8164 29.9109 14.6851L30.7228 11.6129C31.0346 10.424 30.8623 9.15991 30.2436 8.09784C29.625 7.03573 28.6104 6.26226 27.4224 5.94697Z"
                                                fill="#353C94"/>
                                            <path
                                                d="M17.8677 30.5287L20.6985 31.2923C21.8887 31.6083 23.1556 31.4385 24.2206 30.8204C25.2856 30.2023 26.0615 29.1864 26.3776 27.9963L27.1764 24.9944C24.9243 27.994 21.5787 29.983 17.8677 30.5287Z"
                                                fill="#353C94"/>
                                            <path
                                                d="M15.8844 3.44104C13.3122 3.44017 10.7976 4.20211 8.65853 5.63048C6.51947 7.05885 4.85203 9.08951 3.86712 11.4656C2.8822 13.8417 2.62405 16.4565 3.12532 18.9793C3.62658 21.5021 4.86475 23.8196 6.68322 25.6387C8.50168 27.4578 10.8188 28.6968 13.3414 29.1989C15.8641 29.701 18.479 29.4437 20.8554 28.4596C23.2318 27.4755 25.2631 25.8088 26.6921 23.6702C28.1212 21.5315 28.884 19.0172 28.884 16.445C28.884 12.9969 27.5146 9.68996 25.0767 7.25138C22.639 4.81278 19.3325 3.4422 15.8844 3.44104ZM8.52001 9.92768C8.65905 9.2067 9.00868 8.54318 9.52481 8.02092C10.0409 7.49868 10.7003 7.14118 11.4196 6.99363C12.1389 6.84607 12.8857 6.9151 13.5658 7.19197C14.2458 7.46883 14.8286 7.94112 15.2402 8.54911C15.6519 9.15707 15.874 9.87348 15.8786 10.6077C15.8831 11.342 15.6699 12.0611 15.2658 12.6741C14.8617 13.2872 14.285 13.7667 13.6084 14.052C12.9319 14.3373 12.1859 14.4156 11.4648 14.277C10.9859 14.1849 10.5297 13.9993 10.1224 13.7309C9.71512 13.4625 9.36477 13.1164 9.09125 12.7125C8.81779 12.3086 8.62657 11.8548 8.52855 11.3769C8.43053 10.8991 8.42759 10.4066 8.52001 9.92768ZM13.9226 21.163C13.7826 21.8837 13.432 22.5467 12.9153 23.0683C12.3985 23.5897 11.7387 23.9464 11.0193 24.093C10.2999 24.2396 9.55325 24.1697 8.87362 23.892C8.19392 23.6143 7.61186 23.1414 7.20095 22.533C6.79003 21.9246 6.5687 21.208 6.56495 20.4739C6.5612 19.7396 6.77519 19.0209 7.17987 18.4083C7.58453 17.7957 8.16177 17.3169 8.83853 17.0323C9.51529 16.7477 10.2612 16.67 10.9821 16.8094C11.4612 16.9019 11.9173 17.088 12.3244 17.3569C12.7315 17.6258 13.0816 17.9724 13.3547 18.3767C13.6278 18.7811 13.8185 19.2352 13.916 19.7134C14.0134 20.1915 14.0157 20.684 13.9226 21.163ZM15.4982 18.1567C15.1782 18.0948 14.8837 17.9395 14.6518 17.7104C14.4199 17.4813 14.2611 17.1887 14.1954 16.8694C14.1296 16.5502 14.1598 16.2186 14.2823 15.9166C14.4048 15.6145 14.6139 15.3555 14.8834 15.1721C15.1529 14.9888 15.4707 14.8894 15.7966 14.8864C16.1225 14.8835 16.442 14.9771 16.7148 15.1555C16.9876 15.3339 17.2015 15.5891 17.3294 15.8889C17.4573 16.1887 17.4936 16.5197 17.4337 16.8401C17.3936 17.0539 17.3117 17.2577 17.1926 17.4398C17.0735 17.6218 16.9196 17.7786 16.7397 17.901C16.5599 18.0233 16.3576 18.1089 16.1445 18.1528C15.9314 18.1967 15.7118 18.198 15.4982 18.1567ZM23.2444 22.9536C23.1054 23.6746 22.7557 24.3382 22.2395 24.8604C21.7235 25.3826 21.0641 25.7402 20.3448 25.8877C19.6256 26.0353 18.8787 25.9662 18.1986 25.6894C17.5186 25.4125 16.9359 24.9402 16.5242 24.3322C16.1126 23.7242 15.8904 23.0078 15.8858 22.2736C15.8812 21.5394 16.0945 20.8203 16.4986 20.2072C16.9027 19.5941 17.4794 19.1147 18.1559 18.8293C18.8325 18.5441 19.5785 18.4657 20.2995 18.6043C20.7785 18.6964 21.2347 18.882 21.642 19.1504C22.0492 19.4188 22.3996 19.7649 22.6732 20.1688C22.9466 20.5727 23.1378 21.0266 23.2359 21.5044C23.3339 21.9822 23.3367 22.4747 23.2444 22.9536ZM20.7867 16.072C20.0657 15.933 19.4022 15.5833 18.8799 15.0671C18.3577 14.551 18.0001 13.8917 17.8526 13.1724C17.7051 12.4531 17.7741 11.7062 18.0509 11.0262C18.3279 10.3462 18.8001 9.76346 19.4081 9.35181C20.0161 8.94016 20.7325 8.71796 21.4667 8.7134C22.201 8.70883 22.9201 8.92209 23.5331 9.32618C24.1462 9.73027 24.6257 10.307 24.911 10.9835C25.1963 11.6601 25.2746 12.4061 25.136 13.1271C25.0444 13.6065 24.8592 14.0632 24.591 14.4709C24.3228 14.8787 23.9768 15.2296 23.5728 15.5035C23.1689 15.7774 22.7148 15.969 22.2368 16.0673C21.7587 16.1657 21.266 16.1687 20.7867 16.0764V16.072Z"
                                                fill="#353C94"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg width="30" height="31" viewBox="0 0 31 32" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.5167 16.1193C10.5167 13.4302 12.6953 11.2497 15.3836 11.2497C18.0719 11.2497 20.2518 13.4302 20.2518 16.1193C20.2518 18.8084 18.0719 20.9888 15.3836 20.9888C12.6953 20.9888 10.5167 18.8084 10.5167 16.1193ZM7.88498 16.1193C7.88498 20.262 11.2421 23.6201 15.3836 23.6201C19.5252 23.6201 22.8822 20.262 22.8822 16.1193C22.8822 11.9766 19.5252 8.61847 15.3836 8.61847C11.2421 8.61847 7.88498 11.9766 7.88498 16.1193ZM21.4268 8.32107C21.4266 8.66775 21.5292 9.00671 21.7217 9.29505C21.9141 9.58339 22.1877 9.80815 22.5079 9.94096C22.828 10.0738 23.1804 10.1086 23.5204 10.0411C23.8602 9.97364 24.1726 9.80677 24.4178 9.56175C24.6629 9.3167 24.83 9.00444 24.8978 8.66443C24.9655 8.32442 24.9309 7.97196 24.7984 7.65161C24.6659 7.33125 24.4414 7.05739 24.1533 6.86467C23.8652 6.67194 23.5264 6.56899 23.1798 6.56886C22.7152 6.56908 22.269 6.75373 21.9405 7.08226C21.6119 7.4108 21.4272 7.85635 21.4268 8.32107ZM9.48384 28.0095C8.06011 27.9446 7.28624 27.7074 6.77197 27.507C6.09017 27.2415 5.6037 26.9253 5.09223 26.4144C4.58076 25.9034 4.26417 25.4173 3.99991 24.7353C3.79942 24.2211 3.56227 23.4468 3.49755 22.0226C3.42675 20.4829 3.41261 20.0203 3.41261 16.1194C3.41261 12.2184 3.42792 11.7573 3.49755 10.2162C3.56238 8.79201 3.8013 8.01921 3.99991 7.50351C4.26533 6.82151 4.58147 6.33491 5.09223 5.82329C5.603 5.31167 6.089 4.99498 6.77197 4.73064C7.28601 4.53011 8.06011 4.29288 9.48384 4.22814C11.0232 4.15733 11.4856 4.14319 15.3836 4.14319C19.2817 4.14319 19.7446 4.15849 21.2851 4.22814C22.7089 4.293 23.4814 4.53198 23.997 4.73064C24.6788 4.99498 25.1653 5.31238 25.6768 5.82329C26.1882 6.3342 26.5037 6.82151 26.7691 7.50351C26.9695 8.01769 27.2067 8.79201 27.2715 10.2162C27.3423 11.7573 27.3564 12.2184 27.3564 16.1194C27.3564 20.0203 27.3423 20.4816 27.2715 22.0226C27.2066 23.4468 26.9682 24.2209 26.7691 24.7353C26.5037 25.4173 26.1875 25.9039 25.6768 26.4144C25.166 26.9248 24.6788 27.2415 23.997 27.507C23.483 27.7075 22.7089 27.9448 21.2851 28.0095C19.7458 28.0803 19.2834 28.0944 15.3836 28.0944C11.4839 28.0944 11.0227 28.0803 9.48384 28.0095ZM9.36295 1.60018C7.80834 1.671 6.74603 1.91758 5.81831 2.27867C4.85752 2.65158 4.04418 3.15186 3.23142 3.96357C2.41865 4.77528 1.9198 5.59015 1.54701 6.55121C1.18601 7.47979 0.939509 8.54182 0.868711 10.0969C0.796746 11.6544 0.780273 12.1524 0.780273 16.1193C0.780273 20.0862 0.796746 20.5842 0.868711 22.1417C0.939509 23.6969 1.18601 24.7588 1.54701 25.6874C1.9198 26.6478 2.41877 27.4636 3.23142 28.275C4.04406 29.0864 4.85752 29.5859 5.81831 29.9599C6.74778 30.321 7.80834 30.5676 9.36295 30.6384C10.9208 30.7092 11.4178 30.7268 15.3836 30.7268C19.3495 30.7268 19.8472 30.7104 21.4043 30.6384C22.959 30.5676 24.0206 30.321 24.9489 29.9599C25.9092 29.5859 26.7231 29.0867 27.5358 28.275C28.3486 27.4633 28.8464 26.6478 29.2203 25.6874C29.5812 24.7588 29.8289 23.6968 29.8985 22.1417C29.9693 20.583 29.9858 20.0862 29.9858 16.1193C29.9858 12.1524 29.9693 11.6544 29.8985 10.0969C29.8277 8.5417 29.5812 7.4792 29.2203 6.55121C28.8464 5.59073 28.3473 4.77657 27.5358 3.96357C26.7244 3.15057 25.9092 2.65158 24.9501 2.27867C24.0206 1.91758 22.9589 1.66983 21.4054 1.60018C19.8484 1.52936 19.3506 1.51172 15.3848 1.51172C11.419 1.51172 10.9208 1.5282 9.36295 1.60018Z"
                                                fill="#353C94"/>
                                            <path
                                                d="M10.5167 16.1193C10.5167 13.4302 12.6953 11.2497 15.3836 11.2497C18.0719 11.2497 20.2518 13.4302 20.2518 16.1193C20.2518 18.8084 18.0719 20.9888 15.3836 20.9888C12.6953 20.9888 10.5167 18.8084 10.5167 16.1193ZM7.88498 16.1193C7.88498 20.262 11.2421 23.6201 15.3836 23.6201C19.5252 23.6201 22.8822 20.262 22.8822 16.1193C22.8822 11.9766 19.5252 8.61847 15.3836 8.61847C11.2421 8.61847 7.88498 11.9766 7.88498 16.1193ZM21.4268 8.32107C21.4266 8.66775 21.5292 9.00671 21.7217 9.29505C21.9141 9.58339 22.1877 9.80815 22.5079 9.94096C22.828 10.0738 23.1804 10.1086 23.5204 10.0411C23.8602 9.97364 24.1726 9.80677 24.4178 9.56175C24.6629 9.3167 24.83 9.00444 24.8978 8.66443C24.9655 8.32442 24.9309 7.97196 24.7984 7.65161C24.6659 7.33125 24.4414 7.05739 24.1533 6.86467C23.8652 6.67194 23.5264 6.56899 23.1798 6.56886C22.7152 6.56908 22.269 6.75373 21.9405 7.08226C21.6119 7.4108 21.4272 7.85635 21.4268 8.32107ZM9.48384 28.0095C8.06011 27.9446 7.28624 27.7074 6.77197 27.507C6.09017 27.2415 5.6037 26.9253 5.09223 26.4144C4.58076 25.9034 4.26417 25.4173 3.99991 24.7353C3.79942 24.2211 3.56227 23.4468 3.49755 22.0226C3.42675 20.4829 3.41261 20.0203 3.41261 16.1194C3.41261 12.2184 3.42792 11.7573 3.49755 10.2162C3.56238 8.79201 3.8013 8.01921 3.99991 7.50351C4.26533 6.82151 4.58147 6.33491 5.09223 5.82329C5.603 5.31167 6.089 4.99498 6.77197 4.73064C7.28601 4.53011 8.06011 4.29288 9.48384 4.22814C11.0232 4.15733 11.4856 4.14319 15.3836 4.14319C19.2817 4.14319 19.7446 4.15849 21.2851 4.22814C22.7089 4.293 23.4814 4.53198 23.997 4.73064C24.6788 4.99498 25.1653 5.31238 25.6768 5.82329C26.1882 6.3342 26.5037 6.82151 26.7691 7.50351C26.9695 8.01769 27.2067 8.79201 27.2715 10.2162C27.3423 11.7573 27.3564 12.2184 27.3564 16.1194C27.3564 20.0203 27.3423 20.4816 27.2715 22.0226C27.2066 23.4468 26.9682 24.2209 26.7691 24.7353C26.5037 25.4173 26.1875 25.9039 25.6768 26.4144C25.166 26.9248 24.6788 27.2415 23.997 27.507C23.483 27.7075 22.7089 27.9448 21.2851 28.0095C19.7458 28.0803 19.2834 28.0944 15.3836 28.0944C11.4839 28.0944 11.0227 28.0803 9.48384 28.0095ZM9.36295 1.60018C7.80834 1.671 6.74603 1.91758 5.81831 2.27867C4.85752 2.65158 4.04418 3.15186 3.23142 3.96357C2.41865 4.77528 1.9198 5.59015 1.54701 6.55121C1.18601 7.47979 0.939509 8.54182 0.868711 10.0969C0.796746 11.6544 0.780273 12.1524 0.780273 16.1193C0.780273 20.0862 0.796746 20.5842 0.868711 22.1417C0.939509 23.6969 1.18601 24.7588 1.54701 25.6874C1.9198 26.6478 2.41877 27.4636 3.23142 28.275C4.04406 29.0864 4.85752 29.5859 5.81831 29.9599C6.74778 30.321 7.80834 30.5676 9.36295 30.6384C10.9208 30.7092 11.4178 30.7268 15.3836 30.7268C19.3495 30.7268 19.8472 30.7104 21.4043 30.6384C22.959 30.5676 24.0206 30.321 24.9489 29.9599C25.9092 29.5859 26.7231 29.0867 27.5358 28.275C28.3486 27.4633 28.8464 26.6478 29.2203 25.6874C29.5812 24.7588 29.8289 23.6968 29.8985 22.1417C29.9693 20.583 29.9858 20.0862 29.9858 16.1193C29.9858 12.1524 29.9693 11.6544 29.8985 10.0969C29.8277 8.5417 29.5812 7.4792 29.2203 6.55121C28.8464 5.59073 28.3473 4.77657 27.5358 3.96357C26.7244 3.15057 25.9092 2.65158 24.9501 2.27867C24.0206 1.91758 22.9589 1.66983 21.4054 1.60018C19.8484 1.52936 19.3506 1.51172 15.3848 1.51172C11.419 1.51172 10.9208 1.5282 9.36295 1.60018Z"
                                                fill="#353C94"/>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-7 justify-end">
                            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-blue-800  uppercase dark:text-white">انواع
                                        خدمات</h2>
                                    <ul className="text-gray-500 text-sm dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">
                                                مشاوره آنلاین روانشناسی
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">
                                                مشاوره آنلاین پزشکی
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">
                                                سرویس اقساطی سلامت
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">
                                                تست‌های روانشناسی
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">
                                                آزمایش در منزل
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">
                                                پزشک و پرستار در منزل
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">
                                                نوبت‌دهی حضوری
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">
                                                تالار گفتگو
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-blue-800  uppercase dark:text-white">
                                        سلامت
                                    </h2>
                                    <ul className="text-gray-500 text-sm dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <Link href="/pages/about-us" className="hover:underline">
                                                درباره ما
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="/pages/contact-us" className="hover:underline">
                                                تماس با ما
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="/pages/faq" className="hover:underline">
                                                سوالات متداول
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="/pages/rules" className="hover:underline">
                                               قوانین استفاده از سایت
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="/pages/privacy-and-security" className="hover:underline">
                                               سیاست ها و حریم خصوصی
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="/pages/return-product" className="hover:underline">
                                              مرجوع کردن محصول
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <a href="/blog" className="hover:underline">
                                                مجله آموزش
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-blue-800  uppercase dark:text-white">
                                        ابزارهای رایگان سلامت
                                    </h2>
                                    <ul className="text-gray-500 text-sm dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">
                                                تشخیص آنلاین بیماری
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700"/>
                    <div className="lg:grid grid-cols-10">
                        <div className="col-span-7">
                            <h3 className="text-blue-800 text-sm mb-4">سلامت، رزرو نوبت پزشک و تست‌های آنلاین پزشکی</h3>
                            <p className="text-secondary text-sm mb-4 leading-8">
                                در سایت ما، به راحتی و بدون اتلاف وقت، به هزاران پزشک متخصص دسترسی داشته باشید. با چند
                                کلیک ساده، نوبت خود را رزرو کنید، از پزشکان مشاوره آنلاین بگیرید و به اطلاعات پزشکی مورد
                                نیازتان دسترسی پیدا کنید. ما به شما کمک می‌کنیم تا با خیال راحت به سلامت خود اهمیت دهید.
                            </p>
                        </div>
                        <div className="col-span-3 overflow-hidden">
                            <div className="flex justify-end items-center gap-3">
                                <img src=" " className="inline-block w-[75px]"
                                     alt="enamad.png"/>
                                <img src=" " className="inline-block  w-[75px]"
                                     alt="irimc.png"/>
                                <img src=" "
                                     className="inline-block  w-[75px]" alt="samandehi.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 py-4 text-center">
                    <div className="mx-auto w-full max-w-screen-xl flex  justify-between">
                        <p className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
                            تمام حقوق مادی و معنوی این سایت محفوظ و متعلق به مجموعه <b>رزنا</b> می باشد.
                        </p>
                        <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400 ltr">
                             © 2025
                <Link href="/public?utm_name=dociran"
                   className="hover:underline px-1">Rosena ™</Link>. All Rights Reserved.
            </span>

                    </div>
                </div>
            </footer>

        </>
    )
}
