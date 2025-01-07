import React, { useState } from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from '../data_with_examples'
import Section from './Section'
import Tabs from './Tabs'

const Examples = () => {
  let tabContent = 'please click a bbutton'

  const [content, setContent] = useState()

  function handleSelect(selectedButton) {
    console.log(selectedButton)
    setContent(selectedButton)
  }

  tabContent = <p>Please select the topic.</p>

  if (content) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[content].title}</h3>
        <p>{EXAMPLES[content].description}</p>
        <pre>
          <code>{EXAMPLES[content].code}</code>
        </pre>
      </div>
    )
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={content === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={content === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              sSelected={content === 'props'}
              onSelect={() => handleSelect('props')}
            >
              props
            </TabButton>
            <TabButton
              sSelected={content === 'state'}
              onSelect={() => handleSelect('state')}
            >
              state
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      
    </Section>
  )
}

export default Examples
