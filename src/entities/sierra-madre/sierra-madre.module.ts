import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SierraMadreHeroSlide } from './enitities/sierra-madre-hero-slide.entity';
import { SierraMadreMainPage } from './enitities/sierra-madre-main-page.entity';
import { SierraMadrePromo } from './enitities/sierra-madre-promo.entity';
import { SierraMadreService as Service } from './enitities/sierra-madre-service.entity';
import { SierraMadreResolver } from './sierra-madre.resolver';
import { SierraMadreService } from './sierra-madre.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SierraMadreHeroSlide,
      SierraMadrePromo,
      Service,
      SierraMadreMainPage,
    ]),
  ],
  providers: [SierraMadreService, SierraMadreResolver],
})
export class SierraMadreModule {}
