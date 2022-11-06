import { css } from '@emotion/react'
import { CheckBox } from '@/components/elements/CheckBox'
import { Heading } from '@/components/elements/Heading'
import { CardStyle, HeadingWrap } from '@/styles/ShareStyle'
import { PrefItem } from '@/types/api/Pref'

type Props = {
  prefList: PrefItem[]
  onCheckBox: (checkPrefCode: number, checkPrefName: string) => void
}

export const CheckboxGroup = ({ prefList, onCheckBox }: Props) => {
  const regionList = [
    { id: 1, region: '北海道地方' },
    { id: 2, region: '東北地方' },
    { id: 8, region: '関東地方' },
    { id: 15, region: '中部地方' },
    { id: 24, region: '近畿地方' },
    { id: 31, region: '中国地方' },
    { id: 36, region: '四国地方' },
    { id: 40, region: '九州地方' },
  ]

  return (
    <section css={CardStyle}>
      <div css={HeadingWrap}>
        <Heading>都道府県一覧</Heading>
      </div>
      <div css={ListInner}>
        {prefList.map((prefItem, index) => (
          <>
            {regionList.map(
              (regionObj) =>
                regionObj.id === prefItem.prefCode && (
                  <h3 css={regionStyle}>{regionObj.region}</h3>
                ),
            )}
            <CheckBox
              key={index}
              checked={prefItem.isChecked}
              onChange={() => onCheckBox(prefItem.prefCode, prefItem.prefName)}
            >
              {prefItem.prefName}
            </CheckBox>
          </>
        ))}
      </div>
    </section>
  )
}

const regionStyle = css`
  margin: 16px 0 4px;
  font-size: 20px;
`

const ListInner = css`
  margin: 10px 0;
  padding: 0 40px;
`
