export const MY_ORDERS = {
  ICONS: {
    TS1501CORBSSV0002: '/assets/images/diagnostics-managing-icon.png', //Diagnostics – Pathology
    TS1501CORBSSV0004: '/assets/images/diag-radiology.png', //Diagnostics-radiology-imaging
    TS1501CORBSSV0005: '/assets/images/', //Care at Home
    TS2001CORBSSV0016: '/assets/images/nursing-icon.png', //Nursing
    TS2001CORBSSV0017: '/assets/images/Physiotherapy-icon.png', //Physiotherapy
    TS2001CORBSSV0018: '/assets/images/attendant.png', //Bedside Attendant
    TS2001CORBSSV0019: '/assets/images/', //Speciality
    TS1501CORBSSV0001: '/assets/images/doctor-consultation-icon.png', //Doctor
    TS1501CORBSSV0011: '/assets/images/equipment.png', //Medical Equipment - Buying & Rental
    TS1501CORBSSV0010: '/assets/images/wellbeing.png', //Emotional Wellbeing- Psychiatry & Psychology
    TS1501CORBSSV0007: '/assets/images/', //Second Opinion
    TS1501CORBSSV0013: '/assets/images/mywellness.png', //myWellness
    TS1501CORBSSV0006: '/assets/images/', //Family Doctor
    TS2001CORBSSV0020: '/assets/images/', //BloodConnect
    TS2001CORBSSV0021: '/assets/images/', //Package
    TS1501CORBSSV0003: '/assets/images/medicine-supplies-icon.png', //Medicines
    TS2001CORBSSV0022: '/assets/images/', //Hospitals
    TS1501CORBSSV00021: '/assets/images/diagnostics-managing-icon.png', //Diagnostics – Pathology1
  },
  STATUS_COLOR: {
    cancelled: '#EA6159',
    completed: '#89C260',
    'in progress': '#F2C553',
    inprogress: '#F2C553',
  },
  STATUS: {
    inProgress: 'In Progress',
    completed: 'Completed',
    cancelled: 'Cancelled',
    all: 'All Orders',
  },
  STATUS_ICONS: {
    ENABLED: {
      'order-assigned-to-officer': 'order_assigned.svg',
      'order-accepted-by-officer': 'order_accepted.svg',
      'officer-started': 'delivery_officer_started.svg',
      'officer-reached': 'officer-reached.svg',
      delivered: 'delivered.svg',
      'order-completed': 'order-completed.svg',
      'order-confirmed': 'order-confirmed.svg',
      'in-progress': 'servicing_patient.svg',
      'sample-submitted-by-officer-to-associate': 'sample_submitted_to_associate.svg',
      'sample-collected-by-ahelp': 'sample_collected_by_PHELP.svg',
      'sample-submitted-to-diagnostic-lab': 'sample_submitted_to_lab.svg',
      'delivery-order-confirmed': 'order-confirmed.svg',
      'order-assigned-to-doctor': 'order_assigned.svg',
      'order-accepted-by-doctor': 'order_accepted_ardo.svg',
      'consultation-started': 'started.svg',
      'order-assigned-to-ardo': 'order_assigned.svg',
      'order-accepted-by-ardo': 'order_accepted_ardo.svg',
      'customer-reached-at-center': 'customer_at_diagnostic_center.svg',
      'customer-checked-in': 'customer-checked-in.svg',
      'medicines-delivered': 'medicines-delivered.svg',
      'assigned-to-vendor': 'order_assigned.svg',
      'equipement-assigned-for-delivery': 'order_assigned.svg',
      'prescription-pending': 'prescr_pending.svg',
      'to-be-assigned': 'order_accepted.svg',
      'order-received': 'order_accepted.svg',
      'pickup-request-is-raised': 'sample_submitted_to_associate.svg',
      'pickup-accepted': 'order_accepted_ardo.svg',
      'out-for-delivery': 'started.svg',
      'order-shipped': 'order-shipped.svg',
      'delivery-completed': 'completed.png',
      'order-delivered': 'order-delivered.svg',
      'order-cancelled': 'order-cancelled.svg',
      'pickup-assigned': 'order_assigned.svg',
      'out-for-pickup': 'started.svg',
      'health-officer-started': 'health-officer-started.svg',
      'health-officer-assigned': 'health-officer-assigned.svg',
      'health-officer-reached': 'officer-reached.svg',
      'service-delivered': 'service-delivered.svg',
      'product-availability-confirmed': 'product-availability-confirmed.svg',
      'product-shipped': 'order_shipped.svg',
      'installation-completed': 'installation-completed.svg',
      'consultation-confirmed': 'consultation-confirmed.svg',
      'consultation-completed': 'consultation-completed.svg',
      'assigned-to-officer-for-sample-collection':
        'assigned-to-officer-for-sample-collection.svg',
      'delivery-officer-started': 'delivery-officer-started.svg',
      'picked-up-reports-from-associate-lab': 'picked-up-reports-from-associate-lab.svg',
      'reports-generated-for-the-order': 'reports-generated.svg',
      'sample-collected': 'sample-collected.svg',
      'tests-in-progress': 'tests-in-progress.svg',
      'pharmacist-assigned': 'pharmacist-assigned.svg',
      'pharmacist-confirmed': 'pharmacist-confirmed.svg',
      'test-completed': 'test-completed.svg',
      rescheduled: 'order-rescheduled.svg',
    },
    DISABLED: {
      'order-assigned-to-officer': 'order_assigned.svg',
      'order-accepted-by-officer': 'order_accepted.svg',
      'officer-started': 'delivery-officer-started-grey.svg',
      'officer-reached': 'officer-reached-grey.svg',
      delivered: 'delivered-grey.svg',
      'order-completed': 'order_completed-grey.svg',
      'order-confirmed': 'order-confirmed-grey.svg',
      'in-progress': 'servicing_patient.svg',
      'sample-submitted-by-officer-to-associate': 'sample_submitted_to_associate.svg',
      'sample-collected-by-ahelp': 'sample_collected_by_PHELP.svg',
      'sample-submitted-to-diagnostic-lab': 'sample_submitted_to_lab.svg',
      'delivery-order-confirmed': 'order-confirmed-grey.svg',
      'order-assigned-to-doctor': 'order_assigned.svg',
      'order-accepted-by-doctor': 'order_accepted_ardo.svg',
      'consultation-started': 'started.svg',
      'order-assigned-to-ardo': 'order_assigned.svg',
      'order-accepted-by-ardo': 'order_accepted_ardo.svg',
      'customer-reached-at-center': 'customer_at_diagnostic_center.svg',
      'customer-checked-in': 'customer-checked-in-grey.svg',
      'medicines-delivered': 'medicines-delivered-grey.svg',
      'assigned-to-vendor': 'order_assigned.svg',
      'equipement-assigned-for-delivery': 'order_assigned.svg',
      'prescription-pending': 'prescr_pending.svg',
      'to-be-assigned': 'order_accepted.svg',
      'order-received': 'order_accepted.svg',
      'pickup-request-is-raised': 'sample_submitted_to_associate.svg',
      'pickup-accepted': 'order_accepted_ardo.svg',
      'out-for-delivery': 'started.svg',
      'delivery-completed': 'completed.png',
      'order-shipped': 'order-shipped-grey.svg',
      'order-delivered': 'order-delivered-grey.svg',
      'order-cancelled': 'order-cancelled-grey.svg',
      'pickup-assigned': 'order_assigned-grey.svg',
      'out-for-pickup': 'started-grey.svg',
      'health-officer-started': 'health-officer-started-grey.svg',
      'health-officer-assigned': 'health-officer-assigned-grey.svg',
      'health-officer-reached': 'officer-reached-grey.svg',
      'service-delivered': 'service-delivered-grey.svg',
      'product-availability-confirmed': 'product-availability-confirmed-grey.svg',
      'product-shipped': 'order_shipped.svg',
      'installation-completed': 'installation-completed-grey.svg',
      'consultation-confirmed': 'consultation-confirmed-grey.svg',
      'consultation-completed': 'consultation-completed-grey.svg',
      'assigned-to-officer-for-sample-collection':
        'assigned-to-officer-for-sample-collection-grey.svg',
      'delivery-officer-started': 'delivery-officer-started-grey.svg',
      'picked-up-reports-from-associate-lab':
        'picked-up-reports-from-associate-lab-grey.svg',
      'reports-generated-for-the-order': 'reports-generated-grey.svg',
      'sample-collected': 'sample-collected-grey.svg',
      'tests-in-progress': 'tests-in-progress-grey.svg',
      'pharmacist-assigned': 'pharmacist-assigned-grey.svg',
      'pharmacist-confirmed': 'pharmacist-confirmed-grey.svg',
      'test-completed': 'test-completed-grey.svg',
      rescheduled: 'order-rescheduled-grey.svg',
    },
  },
  BUTTONS_LABEL: {
    cancelButton: 'Cancel order',
    feedbackButton: 'Give Feedback',
    reorderButton: 'Reorder',
    resheduleButton: 'Reschedule order',
    showAllPurchasedItems: 'Show all items purchased with this item',
    trackOrder: 'Track Order',
    downloadInvoice: 'Download Invoice',
    sendInvoiceButton: 'Send Invoice to mail',
    sendReport: 'Report Status',
    refundStatusButton: 'Refund Status',
    paymentLinkButton: 'Send Payment Link',
    sendPrescriptionLink: 'Send Upload Prescription Link',
    transferCallButton: 'Transfer Call',
    extendButton: 'Extend Order',
    refundStatus: 'Refund Status',
    paymentDue: 'Send Payment Link',
    showMap: 'Show Map',
    penaltyStatus: 'Penalty Status',
  },
  BUTTONS_PERMISSION: {
    cancelButton: ['viewCancelOrderButton'],
    reorderButton: ['viewReOrderButton'],
    resheduleButton: ['viewReschduleOrderButton'],
    trackOrder: ['viewCCOTrackOrder'],
    downloadInvoice: ['viewOrdersDownloadInvoice'],
    sendInvoiceButton: ['showSendInvoice'],
    sendReport: ['viewOrdersSendReport'],
    refundStatusButton: ['viewOrdersRefundStatus'],
    paymentLinkButton: ['viewSendPaymentDueLink'],
    sendPrescriptionLink: ['viewOrdersSendPrescription'],
    transferCallButton: ['viewOrdersTransferCall'],
    refundStatus: ['viewOrdersRefundStatus'],
    paymentDue: ['viewSendPaymentDueLink'],
  },
};

export const OUR_PARTNERS = {
  AMENITIES: {
    ICON_ENABLED: {
      wifi: '/assets/images/wifi.png',
      parking: '/assets/images/parking.png',
      ac: '/assets/images/air-conditioning.png',
      lounge: '/assets/images/lounge-chair.png',
    },
    ICON_DISABLED: {
      wifi: '/assets/images/wifi.png',
      parking: '/assets/images/parking.png',
      ac: '/assets/images/air-conditioning.png',
      lounge: '/assets/images/lounge-chair.png',
    },
    DISPLAY_TEXT: {
      wifi: 'Wifi',
      parking: 'Parking',
      ac: 'Air Conditioning',
      lounge: 'Lounge Area',
    },
  },
};
