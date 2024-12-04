import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Grid from '@platformos/gatsby-theme-platformos-docskit/src/components/grid'
import Button from '@platformos/gatsby-theme-platformos-docskit/src/components/button'
import Card from '@platformos/gatsby-theme-platformos-docskit/src/components/card'
import HeroImage from './heroimage'

import './homepage.css'



const HomePage = () => (
    <div>

        <HeroImage>ASDASDASD</HeroImage>
        <h1>VALAMI PAGE</h1>

        <Card shadow>
            <h3>Valamicsoda</h3>
            <p className="">
                Valami
            </p>
            <Button href="">Discover </Button>
        </Card>

        <Grid cols="3" className="cardGrid">
            <Card variant="gradient" hoverable>
                Kártya 1
            </Card>
            <Card variant="gradient" hoverable>
                Kártya 2
            </Card>
                
            <Card variant="gradient" hoverable>
                Kártya 3
            </Card>

        </Grid>

        <Card shadow>
            <h3>Valamicsoda</h3>
            <p className="">
                Valami
            </p>
            <Button href="">Discover </Button>
        </Card>

        <Grid cols="2" className="cardGrid">
            <Card variant="highlighted" hoverable>
                Kártya 4
            </Card>
            <Card variant="highlighted" hoverable>
                Kártya 5
            </Card>

        </Grid>

    </div>
);

export default HomePage;