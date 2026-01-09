'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ParticlesProps {
	color?: string
	particleCount?: number
	particleSize?: number
	animate?: boolean
	className?: string
}

export function Particles({
	color = '#ffffff',
	particleCount = 1500,
	particleSize = 4,
	animate = true,
	className = '',
}: ParticlesProps) {
	const mountRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = mountRef.current
		if (!container) return

		let camera: THREE.PerspectiveCamera
		let scene: THREE.Scene
		let material: THREE.PointsMaterial
		let renderer: THREE.WebGLRenderer
		let frameId: number

		let mouseX = 0
		let mouseY = 0

		const init = () => {
			camera = new THREE.PerspectiveCamera(
				55,
				container.clientWidth / container.clientHeight,
				2,
				2000
			)
			camera.position.z = 1000

			scene = new THREE.Scene()

			const geometry = new THREE.BufferGeometry()
			const vertices: number[] = []

			for (let i = 0; i < particleCount; i++) {
				vertices.push(
					Math.random() * 2000 - 1000,
					Math.random() * 2000 - 1000,
					Math.random() * 2000 - 1000
				)
			}

			geometry.setAttribute(
				'position',
				new THREE.Float32BufferAttribute(vertices, 3)
			)

			material = new THREE.PointsMaterial({
				color,
				size: particleSize,
				transparent: true,
				opacity: 0.85,
			})

			const points = new THREE.Points(geometry, material)
			scene.add(points)

			renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
			renderer.setPixelRatio(window.devicePixelRatio)
			renderer.setSize(container.clientWidth, container.clientHeight)

			container.appendChild(renderer.domElement)
		}

		const animateScene = () => {
			if (animate) {
				camera.rotation.z += 0.0003
			}

			camera.position.x += (mouseX - camera.position.x) * 0.03
			camera.position.y += (-mouseY - camera.position.y) * 0.03

			camera.lookAt(scene.position)
			renderer.render(scene, camera)

			frameId = requestAnimationFrame(animateScene)
		}

		const onResize = () => {
			if (!renderer || !camera) return
			camera.aspect = container.clientWidth / container.clientHeight
			camera.updateProjectionMatrix()
			renderer.setSize(container.clientWidth, container.clientHeight)
		}

		const onMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX - container.clientWidth / 2
			mouseY = e.clientY - container.clientHeight / 2
		}

		init()
		animateScene()

		window.addEventListener('resize', onResize)
		window.addEventListener('mousemove', onMouseMove)

		return () => {
			window.removeEventListener('resize', onResize)
			window.removeEventListener('mousemove', onMouseMove)
			cancelAnimationFrame(frameId)

			if (renderer) {
				renderer.dispose()
				container.innerHTML = ''
			}

			if (material) material.dispose()
		}
	}, [color, particleCount, particleSize, animate])

	return (
		<div
			ref={mountRef}
			className={`absolute inset-0 pointer-events-none ${className}`}
		/>
	)
}
