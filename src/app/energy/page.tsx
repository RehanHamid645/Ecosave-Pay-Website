import {energymetadata} from './metadata'
import EnergyPageClient from './EnergyPageClient'

export const metadata = energymetadata

export default function EnergyPage() {
  return <EnergyPageClient />
}