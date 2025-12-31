"use client";
import React, { useEffect, useState } from 'react';
import { OnexBanquet } from './OnexBanquet';
import { SapphireBanquet } from './SapphireBanquet';
export default function BanquetsPage() {
  
  return (
    <>
      <section className="section-breadcrumb padding-b-50">
        <div className="rx-breadcrumb-image">
          <div className="rx-breadcrumb-overlay" />
          <div className="inner-breadcrumb-contact sub_header_content">
            <div className="main-breadcrumb-contact">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="rx-banner-contact">
                      <h1>Banquets</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <OnexBanquet/>
      <SapphireBanquet/>      
    </>
  );
}