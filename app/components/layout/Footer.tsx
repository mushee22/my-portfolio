import React from 'react'

export default function Footer() {
    return (
        <footer className='mt-[145px] border-t border-gray py-8'>
            <div className='container mx-auto flex justify-between'>
                <div className='space-y-3'>
                    <div className='flex items-center gap-x-2'>
                        <p className='font-medium text-forground'>Muhamed Musheer</p>
                        <p className='font-medium text-gray'>mmtmusheer@gmail.com</p>
                    </div>
                    <p className='font-normal text-gray'>Fontend Developer</p>
                </div>
                <div className='space-y-3'>
                    <p className='font-medium text-forground'>Media</p>
                    <div className='flex gap-x-2 items-center'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 0C4.69875 0 0 4.58819 0 10.2529C0 14.7899 3.00562 18.6219 7.17937 19.9804C7.70437 20.0701 7.90125 19.7625 7.90125 19.4934C7.90125 19.2499 7.88813 18.4425 7.88813 17.5838C5.25 18.058 4.5675 16.9558 4.3575 16.3791C4.23938 16.0843 3.7275 15.1743 3.28125 14.9308C2.91375 14.7386 2.38875 14.2644 3.26813 14.2516C4.095 14.2388 4.68563 14.9949 4.8825 15.3025C5.8275 16.8533 7.33688 16.4175 7.94063 16.1484C8.0325 15.4819 8.30812 15.0334 8.61 14.777C6.27375 14.5207 3.8325 13.6364 3.8325 9.71466C3.8325 8.59965 4.23938 7.67689 4.90875 6.95918C4.80375 6.70286 4.43625 5.65193 5.01375 4.24215C5.01375 4.24215 5.89313 3.97301 7.90125 5.29308C8.74125 5.06239 9.63375 4.94704 10.5263 4.94704C11.4188 4.94704 12.3113 5.06239 13.1513 5.29308C15.1594 3.9602 16.0387 4.24215 16.0387 4.24215C16.6163 5.65193 16.2488 6.70286 16.1438 6.95918C16.8131 7.67689 17.22 8.58684 17.22 9.71466C17.22 13.6492 14.7656 14.5207 12.4294 14.777C12.81 15.0975 13.1381 15.7126 13.1381 16.6738C13.1381 18.0452 13.125 19.1474 13.125 19.4934C13.125 19.7625 13.3219 20.0829 13.8469 19.9804C15.9314 19.2935 17.7428 17.9854 19.026 16.2403C20.3092 14.4953 20.9996 12.4012 21 10.2529C21 4.58819 16.3013 0 10.5 0Z" fill="#ABB2BF" />
                        </svg>

                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10C7 9.11594 7.36875 8.2681 8.02513 7.64298C8.6815 7.01786 9.57174 6.66667 10.5 6.66667C11.4283 6.66667 12.3185 7.01786 12.9749 7.64298C13.6313 8.2681 14 9.11594 14 10C14 10.8841 13.6313 11.7319 12.9749 12.357C12.3185 12.9821 11.4283 13.3333 10.5 13.3333C9.57174 13.3333 8.6815 12.9821 8.02513 12.357C7.36875 11.7319 7 10.8841 7 10ZM0 16.6667C0 15.7826 0.368749 14.9348 1.02513 14.3096C1.6815 13.6845 2.57174 13.3333 3.5 13.3333H7V16.6667C7 17.5507 6.63125 18.3986 5.97487 19.0237C5.3185 19.6488 4.42826 20 3.5 20C2.57174 20 1.6815 19.6488 1.02513 19.0237C0.368749 18.3986 0 17.5507 0 16.6667ZM7 0V6.66667H10.5C11.4283 6.66667 12.3185 6.31548 12.9749 5.69036C13.6313 5.06523 14 4.21739 14 3.33333C14 2.44928 13.6313 1.60143 12.9749 0.976311C12.3185 0.35119 11.4283 0 10.5 0L7 0ZM0 3.33333C0 4.21739 0.368749 5.06523 1.02513 5.69036C1.6815 6.31548 2.57174 6.66667 3.5 6.66667H7V0H3.5C2.57174 0 1.6815 0.35119 1.02513 0.976311C0.368749 1.60143 0 2.44928 0 3.33333ZM0 10C0 10.8841 0.368749 11.7319 1.02513 12.357C1.6815 12.9821 2.57174 13.3333 3.5 13.3333H7V6.66667H3.5C2.57174 6.66667 1.6815 7.01786 1.02513 7.64298C0.368749 8.2681 0 9.11594 0 10Z" fill="#ABB2BF" />
                        </svg>
                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.1641 1.65906C19.543 0.878258 17.8325 0.320987 16.0751 0.00113909C16.0592 -0.00167518 16.0428 0.000755409 16.0283 0.00809674C16.0137 0.0154381 16.0017 0.0273296 15.9938 0.0421361C15.7735 0.452106 15.5298 0.988347 15.3595 1.40816C13.4651 1.10643 11.5383 1.10643 9.64391 1.40816C9.45393 0.940495 9.23901 0.484433 9.00017 0.0421361C8.99216 0.0274917 8.9801 0.0157372 8.9656 0.00841949C8.9511 0.00110175 8.93482 -0.00143631 8.91892 0.00113909C7.16113 0.319276 5.45021 0.876835 3.82991 1.65906C3.81605 1.66461 3.80445 1.67504 3.7971 1.68858C0.556508 6.77057 -0.332545 11.7279 0.103388 16.623C0.10495 16.6459 0.119013 16.6689 0.1362 16.6836C2.02325 18.1507 4.13396 19.2708 6.37832 19.9962C6.39417 20.0014 6.4112 20.0013 6.42693 19.9957C6.44267 19.99 6.45629 19.9793 6.46582 19.965C6.94707 19.2763 7.37519 18.5498 7.74393 17.7856C7.75162 17.7699 7.75425 17.752 7.75143 17.7345C7.74862 17.7171 7.74051 17.7011 7.72831 17.6889C7.72023 17.6809 7.71065 17.6747 7.70018 17.6708C7.027 17.3993 6.37503 17.0731 5.7502 16.6951C5.73275 16.6847 5.71977 16.6677 5.71395 16.6476C5.70814 16.6274 5.70993 16.6057 5.71895 16.5869C5.72427 16.5747 5.73231 16.564 5.74239 16.5557C5.87364 16.4524 6.00489 16.3442 6.12989 16.236C6.14093 16.2266 6.15418 16.2206 6.16821 16.2186C6.18225 16.2166 6.19655 16.2186 6.20957 16.2245C10.3017 18.1858 14.7314 18.1858 18.7735 16.2245C18.787 16.2183 18.8018 16.2162 18.8164 16.2182C18.831 16.2202 18.8448 16.2264 18.8563 16.236C18.9813 16.3442 19.1126 16.4524 19.2438 16.5557C19.2544 16.5639 19.263 16.5747 19.2687 16.5872C19.2744 16.5996 19.277 16.6134 19.2764 16.6272C19.2758 16.641 19.2719 16.6544 19.2651 16.6663C19.2584 16.6781 19.2489 16.688 19.2376 16.6951C18.6142 17.0765 17.9614 17.4024 17.286 17.6692C17.2752 17.6733 17.2655 17.6798 17.2574 17.6883C17.2493 17.6968 17.243 17.7071 17.2391 17.7184C17.2355 17.7294 17.2341 17.741 17.2349 17.7525C17.2357 17.7641 17.2387 17.7754 17.2438 17.7856C17.6188 18.5482 18.0485 19.2763 18.5204 19.965C18.5299 19.9793 18.5435 19.99 18.5593 19.9957C18.575 20.0013 18.592 20.0014 18.6079 19.9962C20.856 19.2731 22.9701 18.1528 24.8594 16.6836C24.8688 16.6768 24.8767 16.6677 24.8824 16.6572C24.8881 16.6467 24.8914 16.635 24.8922 16.623C25.4141 10.9637 24.0188 6.04738 21.1954 1.69022C21.1925 1.68302 21.1883 1.67653 21.1829 1.67116C21.1775 1.66579 21.1711 1.66167 21.1641 1.65906ZM8.35486 13.6417C7.12206 13.6417 6.10801 12.4544 6.10801 10.9982C6.10801 9.54032 7.10331 8.35305 8.35486 8.35305C9.61579 8.35305 10.6205 9.55016 10.6017 10.9982C10.6017 12.4544 9.60641 13.6417 8.35486 13.6417ZM16.661 13.6417C15.4298 13.6417 14.4142 12.4544 14.4142 10.9982C14.4142 9.54032 15.4095 8.35305 16.661 8.35305C17.922 8.35305 18.9282 9.55016 18.9079 10.9982C18.9079 12.4544 17.922 13.6417 16.661 13.6417Z" fill="#ABB2BF" />
                        </svg>
                    </div>
                </div>
            </div>
            <p className='text-gray font-normal text-center mt-12 text-xs'>© Copyright 2024. Made by Muhamed Musheer</p>
        </footer>
    )
}
