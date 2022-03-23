import { SearchIcon } from '@heroicons/react/solid'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { setPoolsSearchQuery } from 'app/features/trident/pools/poolsSlice'
import { useAppDispatch } from 'app/state/hooks'
import { FC } from 'react'

import { MobileFilter } from './MobileFilter'

export const PoolSearch: FC = () => {
  const { i18n } = useLingui()
  const dispatch = useAppDispatch()

  return (
    <div className="flex items-center flex-grow w-full gap-4 sm:w-auto">
      <div className="flex items-center flex-grow w-full gap-2 px-3 py-2 bg-opacity-50 border rounded border-dark-800 bg-dark-900 sm:w-auto">
        <SearchIcon strokeWidth={3} width={20} height={20} />
        <input
          className="w-full bg-transparent text-high-emphesis placeholder:text-low-emphesis"
          placeholder={i18n._(t`Search by token or pair`)}
          onChange={(e) => dispatch(setPoolsSearchQuery(e.target.value))}
        />
      </div>
      <MobileFilter />
    </div>
  )
}
