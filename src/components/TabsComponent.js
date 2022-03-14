import { Tab, TabPanel, Tabs, TabList } from 'react-tabs'

// works as a container for props, but don't rended smth directly.
// its children are used in TabsComponent
export function TabsItem() {
  return null
}

export function TabsComponent({ children = [] }) {
  return (
    <Tabs>
      <TabList className="flex not-prose items-center">
        {children.map((tabItem, i) => {
          return (
            <Tab
              key={i}
              className="px-[25px] border-b-2 border-b-smoke text-center text-black hover:bg-smoke p-3 font-roboto text-[0.875rem] font-semibold cursor-pointer dark:hover:bg-orange dark:text-white"
              selectedClassName="border-b-orange border-b-2 text-orange hover:rounded-b-none dark:bg-orange"
            >
              {tabItem.props.title}
            </Tab>
          )
        })}
      </TabList>
      {children.map((tabsItem, index) => (
        <TabPanel
          selectedClassName={
            'inside-tab border-2 py-[5px] px-[25px] rounded -mt-[23px] border-slate-100 dark:dark-grey'
          }
          key={index}
        >
          {tabsItem?.props?.children}
        </TabPanel>
      ))}
    </Tabs>
  )
}
