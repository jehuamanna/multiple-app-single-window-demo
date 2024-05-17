// Generated by dart2js (NullSafetyMode.sound, csp, intern-composite-values), the Dart to JavaScript compiler version: 3.5.0-167.0.dev.
((s, d, e) => {
  s[d] = s[d] || {};
  s[d][e] = s[d][e] || [];
  s[d][e].push({p: "main.dart.js_591", e: "beginPart"});
})(self, "$__dart_deferred_initializers__", "eventLog");
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var A, C, D,
  B = {
    TypographyDemo$() {
      return new B.TypographyDemo(null);
    },
    _TextStyleItem: function _TextStyleItem(t0, t1, t2, t3) {
      var _ = this;
      _.name = t0;
      _.style = t1;
      _.text = t2;
      _.key = t3;
    },
    TypographyDemo: function TypographyDemo(t0) {
      this.key = t0;
    }
  };
  A = holdersList[0];
  C = holdersList[2];
  D = holdersList[131];
  B = hunkHelpers.updateHolder(holdersList[86], B);
  B._TextStyleItem.prototype = {
    build$1(context) {
      var _null = null;
      return new A.Padding(D.EdgeInsets_8_16_8_16, A.Row$(A._setArrayType([A.SizedBox$(A.Text$(this.name, _null, _null, _null, _null, A.Theme_of(context).textTheme.bodySmall, _null, _null, _null), _null, 72), A.Expanded$(A.Text$(this.text, _null, _null, _null, _null, this.style, _null, _null, _null), 1)], type$.JSArray_Widget), C.CrossAxisAlignment_2, _null, C.MainAxisAlignment_0, C.MainAxisSize_1, _null), _null);
    }
  };
  B.TypographyDemo.prototype = {
    build$1(context) {
      var t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, styleItems, _null = null,
        _s12_ = "Regular 16sp",
        textTheme = A.Theme_of(context).textTheme,
        t1 = textTheme.displayLarge;
      t1.toString;
      t2 = textTheme.displayMedium;
      t2.toString;
      t3 = textTheme.displaySmall;
      t3.toString;
      t4 = textTheme.headlineMedium;
      t4.toString;
      t5 = textTheme.headlineSmall;
      t5.toString;
      t6 = textTheme.titleLarge;
      t6.toString;
      t7 = textTheme.titleMedium;
      t7.toString;
      t8 = textTheme.titleSmall;
      t8.toString;
      t9 = textTheme.bodyLarge;
      t9.toString;
      t10 = textTheme.bodyMedium;
      t10.toString;
      t11 = textTheme.labelLarge;
      t11.toString;
      t12 = textTheme.bodySmall;
      t12.toString;
      t13 = textTheme.labelSmall;
      t13.toString;
      styleItems = A._setArrayType([new B._TextStyleItem("Headline 1", t1, "Light 96sp", _null), new B._TextStyleItem("Headline 2", t2, "Light 60sp", _null), new B._TextStyleItem("Headline 3", t3, "Regular 48sp", _null), new B._TextStyleItem("Headline 4", t4, "Regular 34sp", _null), new B._TextStyleItem("Headline 5", t5, "Regular 24sp", _null), new B._TextStyleItem("Headline 6", t6, "Medium 20sp", _null), new B._TextStyleItem("Subtitle 1", t7, _s12_, _null), new B._TextStyleItem("Subtitle 2", t8, "Medium 14sp", _null), new B._TextStyleItem("Body Text 1", t9, _s12_, _null), new B._TextStyleItem("Body Text 2", t10, "Regular 14sp", _null), new B._TextStyleItem("Button", t11, "MEDIUM (ALL CAPS) 14sp", _null), new B._TextStyleItem("Caption", t12, "Regular 12sp", _null), new B._TextStyleItem("Overline", t13, "REGULAR (ALL CAPS) 10sp", _null)], type$.JSArray__TextStyleItem);
      return A.Scaffold$(A.AppBar$(_null, _null, false, _null, _null, 1, _null, _null, _null, false, _null, false, _null, _null, _null, _null, true, _null, _null, _null, _null, _null, A.Text$(A.Localizations_of(context, C.Type_GalleryLocalizations_M5r, type$.GalleryLocalizations).get$demoTypographyTitle(), _null, _null, _null, _null, _null, _null, _null, _null), _null, _null, _null, 1, _null), _null, A.Scrollbar$(A.ListView$(styleItems, _null, _null, _null, _null, _null, _null, false, C.Axis_1, false), _null, _null), _null, _null, false, _null, _null, _null, _null, _null);
    }
  };
  var typesOffset = hunkHelpers.updateTypes([]);
  (function inheritance() {
    var _inheritMany = hunkHelpers.inheritMany;
    _inheritMany(A.StatelessWidget, [B._TextStyleItem, B.TypographyDemo]);
  })();
  A._Universe_addRules(init.typeUniverse, JSON.parse('{"_TextStyleItem":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]},"TypographyDemo":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));
  var type$ = {
    GalleryLocalizations: A.findType("GalleryLocalizations"),
    JSArray_Widget: A.findType("JSArray<Widget>"),
    JSArray__TextStyleItem: A.findType("JSArray<_TextStyleItem>")
  };
};
;
((d, h) => {
  d[h] = d.current;
  d.eventLog.push({p: "main.dart.js_591", e: "endPart", h: h});
})($__dart_deferred_initializers__, "rLXMmQN4PMTmIpjiR2NLtaarzTw=");
;