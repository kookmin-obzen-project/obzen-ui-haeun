import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import DisclosureContent from './MobileHeader'; // 추가: 모바일 화면에서 보여줄 컴포넌트

const DesktopHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 햄버거 아이콘 클릭 시 모바일 메뉴를 열기/닫기
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Obzen</span>
            <img className="h-8 w-auto" src="https://obzen.com/img/logo_red.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          {/* 햄버거 아이콘 클릭 시 모바일 메뉴 열기 */}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {/* ... 메뉴 항목들 ... */}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {/* ... 호출할 특별한 동작이 없다면 해당 메뉴 항목들을 삭제해도 됩니다. */}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* ... 데스크탑 화면 메뉴 항목들 ... */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* ... 데스크탑 화면 로그인 버튼 ... */}
        </div>

        {/* 모바일 화면 메뉴 */}
        <DisclosureContent isOpen={mobileMenuOpen} />
      </nav>
    </header>
  );
};

export default DesktopHeader;
