export const getRouteTitle = (meta, t) => {
    return meta.titleForI18n ? t(`routeTitle.${meta.titleForI18n}`) + " | DUST" : "DUST"
}