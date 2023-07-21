import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'




 export const SideBarData =  [
    {
       title:'Brooklyn Alice',
       img:img2,
       iconClosed:<IoIosArrowDown/>,
       iconOpend:<IoIosArrowUp/>,
    },
    {
        title:"M My Profile"
    },
    {
        title:"S Settings"
    },,
    {
        title:"L Logout"
    },
    {
        title:'Dashboards',
        icon:<BiIcons.BiSolidDashboard/>,
       iconClosed:<IoIosArrowDown/>,
       iconOpend:<IoIosArrowUp/>
    },
    {
        title:'AAnalitics'
    },
    {
        title:'SSales'
    },
    {
        title:'Pages'
    },
    {
        title:'Pages',
       iconClosed:<IoIosArrowDown/>,
       iconOpend:<IoIosArrowUp/>,
         subnav:[
            {
                title:'P Profile',
                iconClosed:<IoIosArrowDown/>,
                iconOpend:<IoIosArrowUp/>,

                  subnav2:[
                    {
                       title:'P Profile Overview'  
                    },
                    {
                        title:'A All Projects'
                    }
                 ]
            },
            {
              title:'U Users',
              iconClosed:<IoIosArrowDown/>,
              iconOpend:<IoIosArrowUp/>,
                subnav2:[
                {
                   title:'N New User'  
                }
             ]
            },
            {
                title:'A Account',
              iconClosed:<IoIosArrowDown/>,
              iconOpend:<IoIosArrowUp/>,
                subnav2:[
                {
                   title:'S Settings'  
                },
                {
                    title:'B Billing'
                },
                {
                    title:'I Invoice'
                }
             ]
            },
            {
                title:'P Projects',
              iconClosed:<IoIosArrowDown/>,
              iconOpend:<IoIosArrowUp/>,
                subnav2:[
                {
                   title:'T Timeline'  
                }
             ]
            },
            {
                title:'P Pricing Page'
            },
            {
                title:'R RTL'
            },
            {
                title:'W Widgets'
            },
            {
                title:'C Charts'
            },
            {
                title:'N Notications'
            },
            {
                title:'Applications',
                iconClosed:<IoIosArrowDown/>,
                iconOpend:<IoIosArrowUp/>,
                    subnav2:[
                    {
                       title:'K Kanban',
                        
                    },
                    {
                        title:'W Wisard'
                    },
                    {
                        title:'D Data tables'
                    },
                    {
                        title:'C Calendar'
                    }
                 ]

            },
            {
              title:'Ecommerce',
              iconClosed:<IoIosArrowDown/>,
              iconOpend:<IoIosArrowUp/>,
                subnav2:[
                    {
                        title:'P Products',
                        iconClosed:<IoIosArrowDown/>,
                        iconOpend:<IoIosArrowUp/>,
                          subnav3:[
                            {
                               title:'N New Product'
                            },
                            {
                                title:'E Edit Product'
                             },
                             {
                                title:'P Product Page'
                             },

                          ]

                    },
                    {
                        title:'O Orders',
                        iconClosed:<IoIosArrowDown/>,
                        iconOpend:<IoIosArrowUp/>,
                           subnav3:[
                            {
                                title:'O Order List'
                            },
                            {
                                title:'O Order Detals'
                            }
                           ]
                    },
                    {
                        title:"Auithentication",
                        conClosed:<IoIosArrowDown/>,
                        iconOpend:<IoIosArrowUp/>,
                          subnav3:[
                             {
                                title:'S Sign In',
                                iconClosed:<IoIosArrowDown/>,
                                iconOpend:<IoIosArrowUp/>,
                                  subvav4:[
                                    {
                                        title:'B Basic'
                                    },
                                    {
                                        title:'C Cover'
                                    },
                                    {
                                        title:'I Illustration'
                                    }
                                  ]
                             },
                             {
                                title:'S Sign Up',
                                iconClosed:<IoIosArrowDown/>,
                                iconOpend:<IoIosArrowUp/>,
                                subvav4:[
                                    {
                                        title:'R Reset Password',
                                        iconClosed:<IoIosArrowDown/>,
                                        iconOpend:<IoIosArrowUp/>,
                                           subvav5:[
                                             {
                                                title:'C Cover'
                                             }
                                           ]

                                    },
                                   
                                  ]
                                   

                             }

                          ]

                    }
                


               ]
            }

         ]

    }


]
  export default SideBarData