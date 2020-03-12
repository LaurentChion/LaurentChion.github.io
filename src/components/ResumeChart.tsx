import React from 'react'

import {
    FlexibleXYPlot,
    VerticalBarSeries,
    LabelSeries,
    XAxis,
    YAxis
} from 'react-vis'

const events = [
    {
        time:Date.parse('05/01/2015'),
        label:"licence",
        category:"graduated",
        period:"etude",
        y:5
    },
    {
        time:Date.parse('04/01/2015'),
        label:"Emla Music",
        category:"app",
        period:"etude",
        y:4
    },
    {
        time:Date.parse('06/01/2017'),
        label:"master",
        category:"graduated",
        period:"etude",
        y:6
    },
    {
        time:Date.parse('01/01/2019'),
        label:"climobil",
        category:"app",
        period:"travail",
        y:1
    }
]

const tickValues = [...new Set(events.map(d => new Date(d.time).getFullYear()))]
    .map(y => Date.parse(`06/01/${y}`))


export default function() {
    return (
        <FlexibleXYPlot
            height={200}
            getX={d => d.time}
            xType="time"
        >
            <XAxis
                tickValues={tickValues}
                tickFormat={d => new Date(d).getFullYear()}
            />
            <VerticalBarSeries
                data={events}
                barWidth={0.5}
            />
            <LabelSeries data={events}/>
        </FlexibleXYPlot>
    )
}