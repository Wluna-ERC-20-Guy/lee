import {add, concat, multiply, pipe, toString} from "ramda";
import {interval, map, skip, take} from 'rxjs'

const $tick = interval(1000)

const TickCount = pipe(
	add(1),
	toString,
	concat('Tick count: ')
)

const TicksElapsed = pipe(
	multiply(1000),
	toString,
	concat('Milliseconds elapsed: ')
)

const AddOne = pipe(
	add(1),
	toString,
	concat('Add 1: ')
)

const $ticks = $tick
	.pipe(map(TickCount))

const $tickA = $tick
	.pipe(map(TicksElapsed))

const $tickB = $tick
	.pipe(map(AddOne))


$ticks
	.pipe(take(16))
	.subscribe(console.log, console.error, () => console.log('Tick count done'))

$tickA
	.pipe(take(16))
	.subscribe(console.log, console.error, () => console.log('Tick time elapsed done'))

$tickB
	.pipe(skip(4))
	.pipe(take(8))
	.subscribe(console.log, console.error, () => console.log('Tick add one done'))

