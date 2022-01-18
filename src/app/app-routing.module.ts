import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
   
  },
  {
    path: 'profile/edit',
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'adam',
    loadChildren: () => import('./adam/adam.module').then( m => m.AdamPageModule)
  },
  {
    path: 'a-propos-de-nous',
    loadChildren: () => import('./a-propos-de-nous/a-propos-de-nous.module').then( m => m.AProposDeNousPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'guide',
    loadChildren: () => import('./guide/guide.module').then( m => m.GuidePageModule)
  },
  {
    path: 'tri',
    loadChildren: () => import('./tri/tri.module').then( m => m.TriPageModule)
  },
  {
    path: 'tri-pile',
    loadChildren: () => import('./tri-pile/tri-pile.module').then( m => m.TriPilePageModule)
  },
  {
    path: 'tri-peintures-vernis',
    loadChildren: () => import('./tri-peintures-vernis/tri-peintures-vernis.module').then( m => m.TriPeinturesVernisPageModule)
  },
  {
    path: 'tri-electroniques',
    loadChildren: () => import('./tri-electroniques/tri-electroniques.module').then( m => m.TriElectroniquesPageModule)
  },
  {
    path: 'tri-metaux',
    loadChildren: () => import('./tri-metaux/tri-metaux.module').then( m => m.TriMetauxPageModule)
  },
  {
    path: 'tri-dechets-organiques',
    loadChildren: () => import('./tri-dechets-organiques/tri-dechets-organiques.module').then( m => m.TriDechetsOrganiquesPageModule)
  },
  {
    path: 'tri-bois',
    loadChildren: () => import('./tri-bois/tri-bois.module').then( m => m.TriBoisPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'reserve',
    loadChildren: () => import('./reserve/reserve.module').then( m => m.ReservePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'tarif',
    loadChildren: () => import('./tarif/tarif.module').then( m => m.TarifPageModule)
  },
  {
    path: 'rdv',
    loadChildren: () => import('./rdv/rdv.module').then( m => m.RdvPageModule)
  },
  {
    path: 'typededechets',
    loadChildren: () => import('./typededechets/typededechets.module').then( m => m.TypededechetsPageModule)
  },
  {
    path: 'tesst',
    loadChildren: () => import('./tesst/tesst.module').then( m => m.TesstPageModule)
  },
  {
    path: 'calendrier',
    loadChildren: () => import('./calendrier/calendrier.module').then( m => m.CalendrierPageModule)
  },
  {
    path: 'recapitulatif/:xyz',
    loadChildren: () => import('./recapitulatif/recapitulatif.module').then( m => m.RecapitulatifPageModule)
  },
  {
    path: 'bancaire',
    loadChildren: () => import('./bancaire/bancaire.module').then( m => m.BancairePageModule)
  },
  {
    path: 'bancontact',
    loadChildren: () => import('./bancontact/bancontact.module').then( m => m.BancontactPageModule)
  },
  {
    path: 'virement',
    loadChildren: () => import('./virement/virement.module').then( m => m.VirementPageModule)
  },
  {
    path: 'mes-rendez-vous',
    loadChildren: () => import('./mes-rendez-vous/mes-rendez-vous.module').then( m => m.MesRendezVousPageModule)
  },
  {
    path: 'confirmation/:xyz',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'recap2/:xyz',
    loadChildren: () => import('./recap2/recap2.module').then( m => m.Recap2PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
