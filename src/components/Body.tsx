import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

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
  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      <div className="col-span-1">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
          iste dolor cupiditate blanditiis ratione.
        </p>
        <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start">
              <div className="flex-shrink-0">
                <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <dt className="font-semibold text-gray-900">{feature.name}</dt>
                <dd className="mt-1">{feature.description}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <p className="text-lg leading-7 text-gray-600">
          이 곳에 오른쪽 화면에 대한 간단한 설명이 들어갑니다.
        </p>
        <button className="mt-4 px-6 py-3 rounded-lg bg-indigo-600 text-white text-base font-semibold">
          버튼
        </button>
      </div>
    </div>
  )
}
