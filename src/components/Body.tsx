import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Body() {
  const [selectedView, setSelectedView] = useState('view1');

  return (
    <div className="flex flex-grow">
    {/* 왼쪽 영역 */}
    <div className="w-2/8 bg-indigo-50 p-6">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">Choose a view</h2>
      <div className="mt-4">
          <label className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600"
              value="view1"
              checked={selectedView === 'view1'}
              onChange={() => setSelectedView('view1')}
            />
            <span className="text-gray-900">View 1</span>
          </label>
          <label className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600"
              value="view2"
              checked={selectedView === 'view2'}
              onChange={() => setSelectedView('view2')}
            />
            <span className="text-gray-900">View 2</span>
          </label>
          <label className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600"
              value="view3"
              checked={selectedView === 'view3'}
              onChange={() => setSelectedView('view3')}
            />
            <span className="text-gray-900">View 3</span>
          </label>
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="w-6/8 flex flex-col justify-center items-center">
        {selectedView === 'view1' && (
          
          <>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">View 1</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This is the content of View 1.
            </p>
          </>
        )}
        {selectedView === 'view2' && (
          <>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">View 2</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This is the content of View 2.
            </p>
          </>
        )}
        {selectedView === 'view3' && (
          <>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">View 3</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This is the content of View 3.
            </p>
          </>
        )}
        <button className="mt-4 px-6 py-3 rounded-lg bg-indigo-600 text-white text-base font-semibold">
          버튼
        </button>
      </div>
    </div>
  );
}
